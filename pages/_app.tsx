import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';
import { theme } from '../theme/index';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { ToastContainer } from 'react-toastify'
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    let dir = router.locale == 'ar' ? 'rtl' : 'ltr';
    let lang = router.locale == 'ar' ? 'ar' : 'en';
    document?.querySelector('html')?.setAttribute('dir', dir);
    document?.querySelector('html')?.setAttribute('lang', lang);
  }, [router.locale]);

  return (
    <Provider store={store}>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default appWithTranslation(App);