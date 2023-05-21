import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import SignUpContainer from 'components/signup';
import SignInSignOutLayout from 'components/layout/signIn-signOut';
import { removeDashAndCapitalize } from 'utiles';

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en-US', ['common'])),
  },
});

export default function Signup() {
  const router = useRouter();
  React.useEffect(() => {
    document.title = removeDashAndCapitalize(router.asPath)
  }, [router.asPath])

  return (
    <SignInSignOutLayout title="Manage the job more effectively with 8doors
    " type="SIGN IN" >
      <SignUpContainer />
    </SignInSignOutLayout>
  );
}
