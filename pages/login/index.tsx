import React from 'react';
import Head from "next/head";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import SignInContainer from 'components/login';
import SignInSignOutLayout from 'components/layout/signIn-signOut';
import { removeDashAndCapitalize } from 'utiles';
import LandingLayout from "components/layout/landingLayout"
import classNames from 'classnames';
import useRemoveScroll from 'hooks/useRemoveScroll';


export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en-US', ['common'])),
  },
});

export default function SignIn() {

  const pageRef = React.useRef(null)
  const router = useRouter();

  useRemoveScroll(pageRef)

  React.useEffect(() => {
    document.title = removeDashAndCapitalize(router.asPath)
  }, [])
  return (
    // <SignInSignOutLayout title='Hi, Welcome back'>
    <div ref={pageRef} className={classNames("overflow-y-auto h-screen")}>

      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@200;300;400;500;600;700;800;900" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
      </Head>
      <LandingLayout>
        <SignInContainer />
      </LandingLayout>
    </div>
    // </SignInSignOutLayout>
  );
}
