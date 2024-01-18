import cn from 'clsx'
import { forwardRef } from 'react'
import { IField } from './field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{ placeholder, error, type = 'text', className, style, Icon, ...rest },
		ref,
	) => {
		return (
			<div className={cn('mb-4', className)} style={style}>
				<label>
					<span className='mb-1 block'>
						{Icon && <Icon className='mr-3' />}
						{placeholder}
					</span>
					<input
						className={cn(
							'bg-white border border-l-black border-solid tranisition-all px-4 py-2 w-full placeholder:text-gray rounded-lg outline-none focus:border-primary',
							{
								'border-red': !!error,
							},
						)}
						ref={ref}
						placeholder={placeholder}
						type={type}
						{...rest}
					/>
				</label>
				{error && <div className='text-red mt-1'>{error}</div>}
			</div>
		)
	},
)

Field.displayName = 'Field'

export default Field
