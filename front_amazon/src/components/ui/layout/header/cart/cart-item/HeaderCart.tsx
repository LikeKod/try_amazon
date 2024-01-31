'use client'

import SquareButton from '@/components/ui/button/SquareButton'
import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'
import { convertPrice } from '@/utils/convertPrice'
import Link from 'next/link'
import { FC } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import CartItem from './cart-actions/CartItem'
import styles from './Cart.module.scss'

const HeaderCart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const { items, total } = useCart()

	return (
		<div className='relative' ref={ref}>
			<SquareButton
				Icon={RiShoppingCartLine}
				onClick={() => {
					setIsShow(!isShow)
				}}
				number={items.length}
			/>

			{isShow && (
				<div className={styles.cartWrapper}>
					<div className='font-normal text-lg mb-5'>My Cart</div>

					<div className={styles.cart}>
						{items.length ? (
							items.map(item => <CartItem item={item} key={item.id} />)
						) : (
							<div className='font-light'>Cart is empty! </div>
						)}
					</div>

					<div className={styles.footer}>
						<div>Total:</div>
						<div>{convertPrice(total)}</div>
					</div>
					{!!items.length && (
						<div className='text-center mt-7 mb-5'>
							<Link className='btn btn-white' href='/checkout' onClick={() => setIsShow(false)}>
								Go to checkout
							</Link>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default HeaderCart
