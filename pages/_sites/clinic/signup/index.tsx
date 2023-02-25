import React from 'react';
import SignUpContainer from 'components/signup';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SignInSignOutLayout from 'components/layout/signIn-signOut';
import { useRouter } from 'next/router';

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en-US', ['common'])),
  },
});

export default function Signup() {
  const router = useRouter();
  return (
    <SignInSignOutLayout type="SIGN IN" signOnClick={() => router.push('/login')}>
      <SignUpContainer />
    </SignInSignOutLayout>
  );
}
