import Checkbox from '@/components/ui/checkbox/Checkbox'
import { FC } from 'react'
import { Rating } from 'react-simple-star-rating'
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
							updateRaitingsQuery(
								queryParams.ratings as string,
								rating.toString(),
							),
						)
					}
					key={rating}
					className='mb-2 text-sm'
				>
					<Rating
						readonly
						initialValue={rating}
						SVGstyle={{ display: 'inline-block' }}
						size={20}
						transition
					/>
				</Checkbox>
			))}
		</FilterWrapper>
	)
}


export default RaitingGroup