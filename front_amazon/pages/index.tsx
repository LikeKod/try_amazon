import { ProductService } from '@/assets/styles/services/product/product.service'
import Home from '@/components/screens/home/Home'
import { TypePaginationProduct } from '@/types/product.interface'
import { GetStaticProps, NextPage } from 'next'

const HomePage: NextPage<TypePaginationProduct> = ({length, products}) => {
	return <Home products={products} length={length}/>
}

export const getStaticProps: GetStaticProps<TypePaginationProduct> = async () => {
	const data  = await ProductService.getAll({
		page: 1,
		perPage: 4
	})

	return {
		props: data
	}
}

export default HomePage
