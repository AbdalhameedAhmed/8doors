import React from 'react';
import { useRouter } from 'next/router';

import ResetPasswordContainer from 'components/resetPassword';
import { removeDashAndCapitalize } from 'utiles';
import LandingLayout from 'components/layout/landingLayout';
import classNames from 'classnames';
import useRemoveScroll from 'hooks/useRemoveScroll';

function ResetPassword() {

  const router = useRouter();
  const ref = React.useRef(null)

  useRemoveScroll(ref)


  React.useEffect(() => {
    document.title = removeDashAndCapitalize(router.asPath)
  }, [router.asPath])

  return (
    <div ref={ref} className={classNames("overflow-y-auto h-screen")} >

      <LandingLayout>
        <ResetPasswordContainer />
      </LandingLayout>
    </div>
  );
}

export default ResetPassword;
