import { CategoryService } from '@/assets/styles/services/category.service'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { FiLogOut } from 'react-icons/fi'
import { useQuery } from 'react-query'
import Loader from '../../Loader'

const Sidebar: FC = () => {
	const { data, isLoading } = useQuery(
		['get category'],
		() => CategoryService.getAll(),
		{
			select: ({ data }) => data,
		},
	)

	const { asPath } = useRouter()
	const { user } = useAuth()
	const { logout } = useActions()

	return (
		<aside
			className='bg-secondary flex flex-col justify-between'
			style={{
				height: 'calc(100vh-91px)',
			}}
		>
			<div>
				{isLoading ? (
					<Loader />
				) : data ? (
					<>
						<div className='text-xl text-white mt-4 mb-6 ml-6'>
							Categories |
						</div>
						<ul>
							{data.map(category => (
								<li key={category.id}>
									<Link
										className={cn(
											'block  text-lg my-3 px-10 hover:text-primary transition-colors duration-200',
											asPath === `/catefory/${category.slug}`
												? 'text-primary'
												: 'text-white',
										)}
										href={`/category/${category.slug}`}
									>
										{category.name}
									</Link>
								</li>
							))}
						</ul>
					</>
				) : (
					<div>Categories not found</div>
				)}
			</div>

			{!!user && (
				<button
					className='text-white flex items-center ml-10 mb-10'
					onClick={() => logout()}
				>
					<FiLogOut />
				</button>
			)}
		</aside>
	)
}

export default Sidebar
