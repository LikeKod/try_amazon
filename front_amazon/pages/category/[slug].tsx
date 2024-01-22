import { CategoryService } from "@/assets/styles/services/category.service";
import { ProductService } from "@/assets/styles/services/product/product.service";
import Catalog from "@/components/ui/catalog/Catalog";
import Layout from "@/components/ui/layout/Layout";
import Meta from "@/components/ui/Meta";
import { ICategory } from "@/types/category.interface";
import { IProduct } from "@/types/product.interface";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";


const CategoryPage: NextPage<{
    products: IProduct[]
    category: ICategory
}> = ({products, category}) => {
    return (
        <Meta title={category.name}>
            <Layout>
                <Catalog products={products || []} title={category.name} />
            </Layout>
        </Meta>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const categories = await CategoryService.getAll()

    const paths = categories.data.map(category => {
        return {
            params: {slug: category.slug}
        }
    })

    return {paths, fallback: 'blocking'}
}

export const getStaticProps: GetStaticProps = async ({
params }) => {
    const {data: products} = await ProductService.getByCategoryId(params?.slug as string)

    const {data: category} = await CategoryService.getBySlug(params?.slug as string)

    return {
        props: {
            products,
            category,
        }
    }
}


export default CategoryPage