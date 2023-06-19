import React from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import SignInContainer from 'components/login';
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
  }, [router.asPath])
  return (
    // <SignInSignOutLayout title='Hi, Welcome back'>
    <div ref={pageRef} className={classNames("overflow-y-auto h-screen")}>

      <LandingLayout>
        <SignInContainer />
      </LandingLayout>
    </div>
    // </SignInSignOutLayout>
  );
}
