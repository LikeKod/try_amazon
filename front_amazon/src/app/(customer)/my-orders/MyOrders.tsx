'use client'

import { OrderService } from '@/assets/styles/services/order.service'
import Heading from '@/components/ui/Heading'
import { useQuery } from 'react-query'

interface IMyOrders {}

export default function MyOrders({}: IMyOrders) {
	const { data: orders } = useQuery(
		['my orders'],
		() => OrderService.getAll(),
		{ select: ({ data }) => data },
	)

	return (
		<>
			<Heading>My Orders!</Heading>

			<section>
				{orders?.length ? (
					orders?.map(order => (
						<div key={order.id}>
							<span>#{order.id}</span>
							<span>{order.status}</span>
							<span>{order.createdAt}</span>
							<span>{order.total}</span>
						</div>
					))
				) : (
					<div>Order not found</div>
				)}
			</section>
		</>
	)
}
