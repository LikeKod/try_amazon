import Heading from '@/components/ui/Heading'
import { NO_INDEX_PAGE } from '@/constants/app.constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Thanks',
	...NO_INDEX_PAGE,
}

export default function ThanksPage() {
	return <Heading>Thanks</Heading>
}
