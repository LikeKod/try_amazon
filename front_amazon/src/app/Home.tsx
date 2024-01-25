'use client'

import Catalog from '@/components/ui/catalog/Catalog'
import { TypePaginationProduct } from '@/types/product.interface'
import { FC } from 'react'

const Home: FC<TypePaginationProduct> = ({ products }) => {

	return (
				<Catalog title='Freshed products' products={products}/>
	)
}

export default Home
