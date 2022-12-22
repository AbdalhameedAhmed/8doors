import React from 'react';
import SignInContainer from 'components/login';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import SignInSignOutLayout from 'components/layout/signIn-signOut';

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en-US', ['common'])),
  },
});

export default function SignIn() {
  const router = useRouter();
  return (
    <SignInSignOutLayout type="SIGN UP" signOnClick={() => router.push('/signup')}>
      <SignInContainer />
    </SignInSignOutLayout>
  );
}
