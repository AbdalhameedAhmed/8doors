import { useEffect, createContext, useState } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store, { persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify'
import { useRouter } from 'next/router';

import { ThemeProvider } from 'theme-ui';
import { theme } from '../theme/index';
import CustomToast from "components/customToast"
import {ToastContextProvider} from "context/toastContext"
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.css';
// import "./bootstrap.min.css"


function App({ Component, pageProps }: AppProps) {



  const router = useRouter();

  useEffect(() => {
    let storagedLang = localStorage.getItem("lang")
    let storagedDir = localStorage.getItem("dir")

    

    storagedLang
      ? document?.querySelector('html')?.setAttribute('lang', storagedLang)
      : document?.querySelector('html')?.setAttribute('lang', "en");


    storagedDir
      ? document?.querySelector('html')?.setAttribute('dir', storagedDir)
      : document?.querySelector('html')?.setAttribute('dir', "ltr");

  }, [router.locale]);

  return (
    <Provider store={store}>
      <ToastContextProvider>

        <PersistGate persistor={persistor} />
        <ToastContainer />
        <CustomToast />
        <ThemeProvider theme={theme}>
          <Head>
            <link
              href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000"
              rel="stylesheet"
            />
          </Head>
          {/* <ThemeSettings/> */}

          <Component {...pageProps} />
        </ThemeProvider>
      </ToastContextProvider>
    </Provider>
  );
}

export default appWithTranslation(App);