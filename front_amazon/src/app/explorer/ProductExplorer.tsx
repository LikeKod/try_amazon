'use client'

import { ProductService } from '@/assets/styles/services/product/product.service'
import Button from '@/components/ui/button/Button'
import Catalog from '@/components/ui/catalog/Catalog'
import Heading from '@/components/ui/Heading'
import { TypePaginationProduct } from '@/types/product.interface'
import cn from 'clsx'
import { FC, useState } from 'react'
import { useQuery } from 'react-query'
import Pagination from './pagination/Pagination'
import styles from './ProductExplorer.module.scss'
import SortDropdown from './sort/SortDropdown'
import { useFilters } from './useFilters'

interface IProductExplorer {
	initialProducts: TypePaginationProduct
}

const ProductExplorer: FC<IProductExplorer> = ({ initialProducts }) => {
	const [isFilterOpen, setIsFilterOpen] = useState(false)

	const { isFilterUpdated, queryParams, updateQueryParams } = useFilters()

	const { data, isFetching } = useQuery(
		['product explorer', queryParams],
		() => ProductService.getAll(queryParams),
		{
			initialData: initialProducts,
			enabled: isFilterUpdated,
		},
	)

	return (
		<>
			<div className='flex items-center justify-between mb-7'>
				<Heading>
					{queryParams.searchTerm
						? `Search by query "${queryParams.searchTerm}"`
						: 'Explorer'}
				</Heading>
				<SortDropdown />
			</div>
            <Button  variant='light' onClick={() => setIsFilterOpen(!isFilterOpen)} className='mb-7'>
                        {isFilterOpen ? 'Close' : 'Open'}
            </Button>

            <div className={cn(styles.explorer, {[styles.filterOpened]: isFilterOpen})}>
                <aside>
                    {/* Filters */}
                </aside>

                <section>
                    {/* @ts-ignore */}
                    <Catalog products={data.products} isLoading={isFetching}/>
                    {/* @ts-ignore */}
                    <Pagination changePage={page => updateQueryParams('page', page.toString())} currentPage={queryParams.page} numberPages={data.length / +queryParams.perPage} />
                </section>
            </div>
		</>
	)
}

export default ProductExplorer
