import { ReviewsService } from '@/assets/styles/services/review.service'
import Button from '@/components/ui/button/Button'
import Heading from '@/components/ui/Heading'
import Loader from '@/components/ui/Loader'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { Rating } from 'react-simple-star-rating'
import { IReviewFields } from './review-fields.interface'

const LeaveReviewsForm: FC<{ productId: number }> = ({ productId }) => {
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset,
		control,
	} = useForm<IReviewFields>({
		mode: 'onChange',
	})

	const queryClient = useQueryClient()

	const { mutate, isSuccess, isLoading } = useMutation(
		['leave review'],
		(data: IReviewFields) => ReviewsService.leave(productId, data),
		{
			onSuccess(data) {
				queryClient.refetchQueries(['get product', productId])
			},
		},
	)

    const onSubmit: SubmitHandler<IReviewFields> = data => {
        mutate(data)
        reset()
    }

    if(isSuccess) return <div>Reviews successfully published!</div>

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Heading className='text-center mb-4'>Leave a review</Heading>
                {isLoading ? (
                    <Loader />
                ): (
                    <div>
                        <Controller
                        control={control}
                        name='rating'
                        render={({field: {onChange, value}}) => (
                            <Rating
                            onClick={onChange}
                            initialValue={value}
                            SVGstyle = {{display: 'inline-block'}}
                            size={20}
                            transition />
                        )}
                        rules={{required: 'Rating is required'}}/>
                        <textarea
                        {...formRegister('text', {
                            required: 'Text is required'
                        })}
                        placeholder='Your text here...'
                        className='rounded-md border border-black bg-white p-3 block mt-4 resize-none w-full text-sm min-h-[110px]'/>

                        {Object.entries(errors) && (
                            <ul className='text-red animate-opacity text-sm list-disc pl-4 mt-3'>
                                {Object.entries(errors).map(([_, error]) => (
                                    <li>{error?.message}</li>
                                ))}
                            </ul>
                        )}

                        <div className='text-center mb-2 mt-8'>
                            <Button type='submit' variant='dark'>
                                Leave
                            </Button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    )
}

export default LeaveReviewsForm