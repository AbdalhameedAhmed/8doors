import React from 'react';
import SignInSignOutLayout from 'components/layout/signIn-signOut';
import ResetPasswordContainer from 'components/resetPassword';
import { useRouter } from 'next/router';
function ResetPassword() {
  const router = useRouter();
  return (
    <SignInSignOutLayout type="SIGN IN" signOnClick={() => router.push('/login')}>
      <ResetPasswordContainer />
    </SignInSignOutLayout>
  );
}

export default ResetPassword;
