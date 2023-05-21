import React from 'react';
import { useRouter } from 'next/router';

import SignInSignOutLayout from 'components/layout/signIn-signOut';
import ResetPasswordContainer from 'components/resetPassword';
import { removeDashAndCapitalize } from 'utiles';

function ResetPassword() {

  const router = useRouter();

  React.useEffect(()=>{
    document.title = removeDashAndCapitalize(router.asPath)
  },[router.asPath])
  
  return (
    <SignInSignOutLayout type="SIGN IN" >
      <ResetPasswordContainer />
    </SignInSignOutLayout>
  );
}

export default ResetPassword;
