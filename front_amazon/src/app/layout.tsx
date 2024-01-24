import '@/assets/styles/globals.scss'
import Providers from '@/providers/Providers'
import { PropsWithChildren } from 'react'

import { getSiteUrl } from '@/config/url.config'
import { SITE_NAME } from '@/constants/app.constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: 'Try develop online shop with video from youtube',
	icons: {
		icon: '/favicon.svg',
	},
	metadataBase: new URL(getSiteUrl()),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: ['info@amazon.com'],
	},
}

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<html lang='en'>
			<body>
				<Providers>{children}</Providers>
				<div id='modal'></div>
			</body>
		</html>
	)
}
