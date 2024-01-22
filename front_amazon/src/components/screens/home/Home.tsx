import CatalogPagination from '@/components/ui/catalog/CatalogPagination'
import Layout from '@/components/ui/layout/Layout'
import Meta from '@/components/ui/Meta'
import { TypePaginationProduct } from '@/types/product.interface'
import { FC } from 'react'

const Home: FC<TypePaginationProduct> = ({ products, length }) => {
	// const { user } = useAuth()
	// const { logout } = useActions()

	return (
		<Meta title='Home'>
			<Layout>
				<CatalogPagination title='Freshed products' data={{products, length}}/>
			</Layout>
		</Meta>
	)
}

export default Home
