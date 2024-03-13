import { Provider } from 'react-redux';
import '../styles/index.scss'
import type { AppProps } from "next/app";
import store from '../redux/app/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  )
}
