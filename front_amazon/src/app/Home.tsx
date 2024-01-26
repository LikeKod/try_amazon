'use client'

import Carousel from '@/components/ui/carousel/Carousel'
import Catalog from '@/components/ui/catalog/Catalog'
import { TypePaginationProduct } from '@/types/product.interface'
import { FC } from 'react'

const Home: FC<TypePaginationProduct> = ({ products }) => {
	return (
		<>
			<Carousel items={carouselItems} className='mb-10' />
			<Catalog title='Freshed products' products={products} />
		</>
	)
}

export default Home
