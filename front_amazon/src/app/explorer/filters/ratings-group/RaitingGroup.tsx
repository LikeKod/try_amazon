import Checkbox from '@/components/ui/checkbox/Checkbox'
import { FC } from 'react'
import { useFilters } from '../../useFilters'
import FilterWrapper from '../FilterWrapper'
import { RATING_VARIANTS } from './rating-variant.data'
import { updateRaitingsQuery } from './update-raiting-query'

const RaitingGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()

	return (
		<FilterWrapper title='Number of reviews'>
			{RATING_VARIANTS.map(rating => (
				<Checkbox
					isChecked={queryParams.ratings?.includes(rating.toString())}
					onClick={() =>
						updateQueryParams(
							'ratings',
							updateRaitingsQuery(queryParams.ratings, rating.toString()),
						)
					}
					key={rating}
					className='mb-2 text-sm'
				></Checkbox>
			))}
		</FilterWrapper>
	)
}
