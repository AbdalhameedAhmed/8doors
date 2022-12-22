import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';
import { theme } from '../theme/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../src/redux';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import TransitionLayout from 'components/layout/transition';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Head>
            <link
              href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000"
              rel="stylesheet"
            />
          </Head>
          <TransitionLayout>
            <Component {...pageProps} />
          </TransitionLayout>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default appWithTranslation(App);
