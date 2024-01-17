import Button from '@/components/ui/button/Button'
import Heading from '@/components/ui/Heading'
import Field from '@/components/ui/input/Field'
import Meta from '@/components/ui/Meta'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { IEmailPassword } from '@/store/user/user.interface'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { validEmail } from './valid-email'

const Auth: FC = () => {
	const { isLoading } = useAuth()

	const { login, register } = useActions()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: formRegister,
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm<IEmailPassword>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (type === 'login') login(data)
		else register(data)

		reset()
	}
	return (
		<Meta title='Auth'>
			<Heading className='capitalize'>{type}</Heading>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Field {...formRegister('email',{
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address'
					}
				})} placeholder='Email'
				error={errors.email?.message}/>
				<Field {...formRegister('password',{
					required: 'Password is required',
					minLength: {
						value: 6,
						message: 'Min length should more 6 symbols'
					}
				})} 
				type='password'
				placeholder='password'
				error={errors.password?.message}/>
				<Button variant='dark'>Auth</Button>
			</form>
		</Meta>
	)
}

export default Auth
