import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import SignInContainer from 'components/login';
import SignInSignOutLayout from 'components/layout/signIn-signOut';
import { removeDashAndCapitalize } from 'utiles';

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en-US', ['common'])),
  },
});

export default function SignIn() {
  const router = useRouter();
  React.useEffect(() => {
    document.title = removeDashAndCapitalize(router.asPath)
  }, [])
  return (
    <SignInSignOutLayout title='Hi, Welcome back' signOnClick={() => router.push('/signup')}>
      <SignInContainer />
    </SignInSignOutLayout>
  );
}
