'use client'

import { StatisticsService } from '@/assets/styles/services/statistics.service'
import Heading from '@/components/ui/Heading'
import Loader from '@/components/ui/Loader'
import { convertPrice } from '@/utils/convertPrice'
import { FC } from 'react'
import { useQuery } from 'react-query'
import styles from './Dashboard.module.scss'

const Dashboard: FC = () => {
	const { data, isFetching } = useQuery(
		['statistics'],
		() => StatisticsService.getMsin(),
		{
			select: ({ data }) => data,
		},
	)

	return (
		<>
			<Heading className='mb-8'>Dashboard</Heading>
			{isFetching ? (
				<Loader />
			) : // @ts-ignore
			data?.length ? (
				<div className={styles.wrapper}>
					{/* @ts-ignore */}
					{data.map((item, index) => (
						<div key={item.name} className={styles.item}>
							<div>{item.name}</div>
							<div>
								{/* @ts-ignore */}
								{index === data.length - 1
									? convertPrice(item.value || 0)
									: item.value}
							</div>
						</div>
					))}
				</div>
			) : (
				<div>Statistics not loaded!</div>
			)}
		</>
	)
}

export default Dashboard
