import { EnumProductSort } from '@/assets/styles/services/product/product.type'
import { Dispatch, FC, SetStateAction } from 'react'

interface ISortDropdown {
	sortType: EnumProductSort
	setSortType: Dispatch<SetStateAction<EnumProductSort>>
}

const SortDropdown: FC<ISortDropdown> = ({ setSortType, sortType }) => {
	return (
		<div className='text-right mb-5'>
			<select
				onChange={e => setSortType(e.target.value as any)}
				value={sortType}
				className='appearance-none py-1 px-2 bg-white'
			>
				{(
					Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
				).map(key => {
					return (
						<option key={key} value={EnumProductSort[key]}>
							{EnumProductSort[key]}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default SortDropdown
