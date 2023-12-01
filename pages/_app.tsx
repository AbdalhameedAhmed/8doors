import { useEffect, createContext, useState } from 'react';
import type { AppProps } from 'next/app';
// import { Inter } from '@next/font/google';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import store, { persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'theme-ui';
import { theme } from '../theme/index';
import CustomToast from "components/customToast"
import { ToastContextProvider } from "context/toastContext"
import TanStackProvider from "components/providers";


import "../styles/bootstrap-grid.css"
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.css';


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
    <TanStackProvider>

      <Provider store={store}>
        <ToastContextProvider>

          <PersistGate persistor={persistor} />
          <ToastContainer />
          <CustomToast />
          <ThemeProvider theme={theme}>
            {/* <ThemeSettings/> */}
            {/* <main className={inter.className}> */}
            <Component {...pageProps} />
            {/* </main> */}
          </ThemeProvider>
        </ToastContextProvider>
      </Provider>
    </TanStackProvider>
  );
}

export default appWithTranslation(App);