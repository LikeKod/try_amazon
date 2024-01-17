import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'dark' | 'light'
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant,
	...rest
}) => {
	return (
		<button
			{...rest}
			className={cn(
				'rounded-xl font-medium px-10 py-2',
				{
					'text-secondary bg-primary': variant === 'dark',
					'text-primary bg-white': variant === 'light',
				},
				className,
			)}
		>
			{children}
		</button>
	)
}

export default Button