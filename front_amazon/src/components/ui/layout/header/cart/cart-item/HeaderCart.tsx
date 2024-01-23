import { OrderService } from '@/assets/styles/services/order.service'
import Button from '@/components/ui/button/Button'
import SquareButton from '@/components/ui/button/SquareButton'
import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'
import { convertPrice } from '@/utils/convertPrice'
import cn from 'clsx'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import { useMutation } from 'react-query'
import CartItem from './cart-actions/CartItem'
import styles from './Cart.module.scss'

const HeaderCart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const { items, total } = useCart()

    const {reset} = useActions()

	const { push } = useRouter()

	const { mutate } = useMutation(
		['create order and payment'],
		() =>
			OrderService.place({
				items: items.map(item => ({
					price: item.price,
					quantity: item.quantity,
					productId: item.product.id,
				})),
			}),
		{
			onSuccess({data}) {
				push(data.confirmation.confirmation_url).then(() => reset())
			},
		},
	)

	return (
		<div className='relative' ref={ref}>
			<SquareButton
				Icon={RiShoppingCartLine}
				onClick={() => {
					setIsShow(!isShow)
				}}
				number={items.length}
			/>
			<div
				className={cn(
					'absolute top-[4.2rem] w-80 -left-[12.5rem] bg-secondary rounded-xl px-5 py-3 text-sm menu z-20 text-white',
					isShow ? 'open-menu' : 'close-menu',
				)}
			>
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
				<div className='text-center'>
					<Button variant='light' size='sm' className='btn-link mt-5 mb-2' onClick={() => mutate}>
						Place order
					</Button>
				</div>
			</div>
		</div>
	)
}

export default HeaderCart
