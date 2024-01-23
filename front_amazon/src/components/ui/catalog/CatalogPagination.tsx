import { ProductService } from '@/assets/styles/services/product/product.service'
import { EnumProductSort } from '@/assets/styles/services/product/product.type'
import { TypePaginationProduct } from '@/types/product.interface'
import { FC, useState } from 'react'
import { useQuery } from 'react-query'
import Button from '../button/Button'
import Heading from '../Heading'
import Loader from '../Loader'
import ProductItem from './product-item/ProductItem'
import SortDropdown from './SortDropdown'

interface ICatalogPagination {
	data: TypePaginationProduct
	title?: string
}

const CatalogPagination: FC<ICatalogPagination> = ({
	data,
	title,
}) => {
    const [page, setPage] = useState(1)

    const [sortType, setSortType] = useState<EnumProductSort>(EnumProductSort.NEWEST)

    const {data: response, isLoading} = useQuery(
        ['products', sortType, page],
        () => ProductService.getAll({
            page,
            perPage: 4,
            sort: sortType
        }),
        {
            initialData: data,
			keepPreviousData: true
        }
    )
	if (isLoading) return <Loader />

	console.log(response?.length)

	return (
		<section>
			{title && <Heading className='mb-5'>{title}</Heading>}
			<SortDropdown sortType = {sortType} setSortType = {setSortType} />
			{response?.products.length ? (
				<>
					<div className='grid grid-cols-4 gap-10'>
						{response.products.map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
					<div className='text-center mt-12'>
						{Array.from({length: response.length / 4}).map
						((_, index) => {
							const pageNumber = index + 1
							return( 
								<Button
									key={pageNumber}
									size='sm'
									variant={page === pageNumber ? 'dark' : 'light'}
									onClick = {() => setPage(pageNumber)}
									className='mx-3'
								>{pageNumber}</Button>
							)
						})}
					</div>
				</>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default CatalogPagination
