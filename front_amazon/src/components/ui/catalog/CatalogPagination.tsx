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
        ['products', sortType],
        () => ProductService.getAll({
            page,
            perPage: 4,
            sort: sortType
        }),
        {
            initialData: data
        }
    )
	if (isLoading) return <Loader />

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
						<Button size='sm' onClick={() => setPage(page+1)} variant='dark'>Load more</Button>
					</div>
				</>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default CatalogPagination
