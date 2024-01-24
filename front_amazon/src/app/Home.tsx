'use client'

import CatalogPagination from '@/components/ui/catalog/CatalogPagination'
import Layout from '@/components/ui/layout/Layout'
import { TypePaginationProduct } from '@/types/product.interface'
import { FC } from 'react'

const Home: FC<TypePaginationProduct> = ({ products, length }) => {
	// const { user } = useAuth()
	// const { logout } = useActions()

	return (
			<Layout>
				<CatalogPagination title='Freshed products' data={{products, length}}/>
			</Layout>
	)
}

export default Home
