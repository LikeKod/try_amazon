'use client'

import AdminList from '@/components/ui/admin/admin-list/AdminList'
import Heading from '@/components/ui/Heading'
import { FC } from 'react'
import { useAdminOrders } from './useAdminOrders'

const Orders: FC = () => {
	const { data, isFetching } = useAdminOrders()

	return (
		<>
			<Heading className='mb-7'>Orders</Heading>
			<AdminList isLoading={isFetching} listItems={data} />
		</>
	)
}

export default Orders
