import type { AppProps } from 'next/app';
import '@/Storybook/bundle.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
