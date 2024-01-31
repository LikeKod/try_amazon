import { CategoryService } from '@/assets/styles/services/category.service'
import { ProductService } from '@/assets/styles/services/product/product.service'
import Catalog from '@/components/ui/catalog/Catalog'
import { IPageSlugParam, TypeParamSlug } from '@/types/page-params'
import { Metadata } from 'next'

export const revalidate = 60

export async function generateStaticParams() {
	const categories = await CategoryService.getAll()

	const paths = categories.data.map(category => {
		return {
			params: { slug: category.slug },
		}
	})

	return paths
}

async function getProducts(params: TypeParamSlug) {
	const { data: products } = await ProductService.getByCategoryId(
		params?.slug as string,
	)

	const { data: category } = await CategoryService.getBySlug(
		params?.slug as string,
	)

	return { products, category }
}

export async function generateMetadata({
	params,
}: IPageSlugParam): Promise<Metadata> {
	const { category, products } = await getProducts(params)
	return {
		title: category.name,
		description: `Lorem ru about ${category.name}`,
		openGraph: {
			images: products[0]?.images || [],
			description: `Lorem ru about ${category.name} `,
		},
	}
}

export default async function CategoryPage({ params }: IPageSlugParam) {
	const data = await getProducts(params)

	return <Catalog products={data.products || []} title={data.category.name} />
}
