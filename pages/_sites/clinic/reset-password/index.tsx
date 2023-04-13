import React from 'react';
import SignInSignOutLayout from 'components/layout/signIn-signOut';
import ResetPasswordContainer from 'components/resetPassword';
import { removeDashAndCapitalize } from 'utiles';
import { useRouter } from 'next/router';

function ResetPassword() {

  const router = useRouter();

  React.useEffect(()=>{
    document.title = removeDashAndCapitalize(router.asPath)
  },[])
  
  return (
    <SignInSignOutLayout type="SIGN IN" signOnClick={() => router.push('/login')}>
      <ResetPasswordContainer />
    </SignInSignOutLayout>
  );
}

export default ResetPassword;
