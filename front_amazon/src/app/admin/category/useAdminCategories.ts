import { CategoryService } from '@/assets/styles/services/category.service'
import { IListItem } from '@/components/ui/admin/admin-list/admin-list.interface'
import { getAdminUrl } from '@/config/url.config'
import { useMutation, useQuery } from 'react-query'

export const useAdminCategory = () => {
	const { data, isFetching, refetch } = useQuery(
		['get admin categories'],
		() => CategoryService.getAll(),
		{
			select: ({data}) =>
				data.map((category): IListItem => {
					return {
						id: category.id,
						viewUrl: `/categories/${category.slug}`,
						editUrl: getAdminUrl(`/categories/${category.id}`),
						items: [
							category.name,
							category.slug
						],
					}
				}),
		},
	)

	const { mutate } = useMutation(
		['delete categories'],
		(id: number) => CategoryService.delete(id),
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
