import '@/assets/styles/globals.scss'
import Providers from '@/providers/Providers'
import { PropsWithChildren } from 'react'

import { Golos_Text } from 'next/font/google'

import Header from '@/components/ui/layout/header/Header'
import Sidebar from '@/components/ui/layout/sidebar/Sidebar'
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

const golos = Golos_Text({
	weight: '400',
	subsets: ['latin', 'cyrillic-ext'],
	display: 'swap',
	style: ['normal'],
	variable: '--font-golos'
})

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<html lang='en' className={golos.variable}>
			<body>
				<Providers>
					<div className='bg-secondary'>
						<Header />
						<div
							className='grid'
							style={{
								gridTemplateColumns: '.8fr 4fr',
							}}
						>
							<Sidebar />
							<main className='p-12 pb-52 bg-bg-color rounded-tl-lg'>
								{children}
							</main>
						</div>
					</div>
				</Providers>
				<div id='modal'></div>
			</body>
		</html>
	)
}
