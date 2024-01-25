import { useAuth } from '@/hooks/useAuth'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import HeaderCart from './cart/cart-item/HeaderCart'
import HeaderProfile from './HeaderProfile'
import Search from './Search'

const Header: FC = () => {
	const { isAdminPAnel } = useIsAdminPanel()
	const { user } = useAuth()

	return (
		<header
			className='bg-secondary w-full py-6 px-6 grid'
			style={{ gridTemplateColumns: '1fr 3 fr 1.2fr' }}
		>
			<Link href='/'>
				{isAdminPAnel ? (
					<h2 className='text-3xl text-white font-semibold'>Admin Panel</h2>
				) : (
					<Image
						priority
						width={180}
						height={37}
						src='/images/logo.svg'
						alt='Amazon-true'
					/>
				)}
			</Link>
			<Search />
			<div className='flex items-center justify-end gap-10'>
				<Link href='/favorites' className='text-white'>
					<AiOutlineHeart size={28} />
				</Link>
				<HeaderCart />
				<HeaderProfile />
			</div>
		</header>
	)
}

export default Header
