import Document, { Html, Main, NextScript, Head } from 'next/document';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

async function getInitialProps(ctx: any) {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps, locale: ctx?.locale || 'en' };
}
function MyDocument({ props }: any) {
  return (
    <Html dir={props?.locale === 'ar' ? 'rtl' : 'ltr'} lang={props?.locale}>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
