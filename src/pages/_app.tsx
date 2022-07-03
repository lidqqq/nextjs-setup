import '@/styles/globals.css';
import { Provider } from 'jotai';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
