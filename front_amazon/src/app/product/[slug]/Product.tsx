'use client'

import { ProductService } from '@/assets/styles/services/product/product.service'
import Heading from '@/components/ui/Heading'
import { IProduct } from '@/types/product.interface'
import { useQuery } from 'react-query'
import ProductInformation from './product-information/ProductInformation'
import ProductReviews from './product-reviews/ProductReviews'
import { ProductGallery } from './ProductGallery'
import ProductReviewsCount from './ProductReviewsCount'
import SimilarProducts from './SimilarProduct'

interface IProductPage {
	initialProduct: IProduct
	similarProducts: IProduct[]
	slug?: string
}

export default function Product({
	initialProduct,
	similarProducts,
	slug = '',
}: IProductPage) {
	const { data: product } = useQuery(
		['get product', initialProduct.id],
		() => ProductService.getBySlug(slug),
		{
			initialData: initialProduct,
			enabled: !!slug,
		},
	)

	return (
		<>
			<Heading className='mb-1'>{product?.name}</Heading>
			{/* @ts-ignore */}
			<ProductReviewsCount product={product} />
			<div
				className='grid gap-12 mt-6'
				style={{ gridTemplateColumns: '1fr 1fr 1fr' }}
			>
				{/* @ts-ignore */}
				<ProductGallery images={product?.images} />
				<div className='opacity-80 font-light'>
					<div className='font-semibold mb-1'>dDescription:</div>
					{product?.description}
				</div>
				{/* @ts-ignore */}
				<ProductInformation product={product} />
			</div>
			<SimilarProducts similarProducts={similarProducts} />
			{/* @ts-ignore */}
			<ProductReviews reviews={product?.reviews} productId={product?.id} />
		</>
	)
}
