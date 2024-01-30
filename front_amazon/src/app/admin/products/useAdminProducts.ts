import { ProductService } from '@/assets/styles/services/product/product.service'
import { IListItem } from '@/components/ui/admin/admin-list/admin-list.interface'
import { getAdminUrl } from '@/config/url.config'
import { formDate } from '@/utils/format-data'
import { useMutation, useQuery } from 'react-query'

export const useAdminProducts = () => {
	const { data, isFetching, refetch } = useQuery(
		['get admin products'],
		() => ProductService.getAll(),
		{
			select: data =>
				data.products.map((product): IListItem => {
					return {
						id: product.id,
						viewUrl: `/product/${product.slug}`,
						editUrl: getAdminUrl(`/products/${product.id}`),
						items: [
							product.name,
							product.category.name,
							formDate(product.createdAt),
						],
					}
				}),
		},
	)

	const { mutate } = useMutation(
		['delete product'],
		(id: number) => ProductService.delete(id),
		{
			onSuccess() {
				refetch()
			},
		},
	)

    return {
        mutate,
        data, 
        isFetching
    }
}
