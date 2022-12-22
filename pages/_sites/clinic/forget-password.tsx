import React from 'react';
import ForgetPasswordContainer from 'components/forgetPassword';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SignInSignOutLayout from 'components/layout/signIn-signOut';
import { useRouter } from 'next/router';

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en-US', ['common'])),
  },
});

function ForgetPassword() {
  const router = useRouter();
  return (
    <SignInSignOutLayout type="SIGN IN" signOnClick={() => router.push('/login')}>
      <ForgetPasswordContainer />
    </SignInSignOutLayout>
  );
}

export default ForgetPassword;
