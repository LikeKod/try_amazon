import { OrderService } from '@/assets/styles/services/order.service'
import { IListItem } from '@/components/ui/admin/admin-list/admin-list.interface'
import { getAdminUrl } from '@/config/url.config'
import { convertPrice } from '@/utils/convertPrice'
import { formDate } from '@/utils/format-data'
import { useQuery } from 'react-query'

export const useAdminOrders = () => {
	const { data, isFetching, refetch } = useQuery(
		['get admin orders'],
		() => OrderService.getAll(),
		{
			select: ({data}) =>
				data.map((order): IListItem => {
					return {
						id: order.id,
						editUrl: getAdminUrl(`/orders/edit/${order.id}`),
						items: [
							`# ${order.id}`,
							order.status,
							formDate(order.createdAt),
							convertPrice(order.total),
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
