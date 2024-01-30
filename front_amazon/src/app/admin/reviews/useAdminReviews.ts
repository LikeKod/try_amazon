import { ReviewsService } from '@/assets/styles/services/review.service'
import { IListItem } from '@/components/ui/admin/admin-list/admin-list.interface'
import { useQuery } from 'react-query'

export const useAdminReviews = () => {
	const { data, isFetching, refetch } = useQuery(
		['get admin reviews'],
		() => ReviewsService.getAll(),
		{
			select: ({data}) =>
				data.map((review): IListItem => {
					return {
						id: review.id,
						items: [
							Array.from({length: review.rating}).map(() => '*').join(' ')
						],
					}
				}),
		},
	)

    return {
        data, 
        isFetching
    }
}
