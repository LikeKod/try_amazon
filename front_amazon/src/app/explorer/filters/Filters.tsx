import { FC } from 'react'
import CategoryGroup from './category-group/CategoryGroup'
import PriceGroup from './price-group/PriceGroup'
import RaitingGroup from './ratings-group/RaitingGroup'

const Filters: FC = () => {
	return (
		<div>
			<PriceGroup />
			<CategoryGroup />
			<RaitingGroup />
		</div>
	)
}

export default Filters