import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import ForgetPasswordContainer from 'components/forgetPassword';
import SignInSignOutLayout from 'components/layout/signIn-signOut';
import { removeDashAndCapitalize } from 'utiles';

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en-US', ['common'])),
  },
});

function ForgetPassword() {
  const router = useRouter();
  React.useEffect(() => {
    document.title = removeDashAndCapitalize(router.asPath)
  }, [router.asPath])
  return (
    <SignInSignOutLayout title='Welcome To 8doors' type="SIGN IN">
      <ForgetPasswordContainer />
    </SignInSignOutLayout>
  );
}

export default ForgetPassword;
