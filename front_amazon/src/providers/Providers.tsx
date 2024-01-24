'use client'

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

import AuthProvider from '@/providers/auth-provider/AuthProvider'
// import { persistor, store } from '@store/store'
import { persistor, store } from '@/store/store'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export default function Providers({children}: PropsWithChildren<unknown>) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AuthProvider>
                        {children}
					</AuthProvider>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
}
