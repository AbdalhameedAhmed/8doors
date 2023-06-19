import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import ForgetPasswordContainer from 'components/forgetPassword';
import { removeDashAndCapitalize } from 'utiles';
import LandingLayout from 'components/layout/landingLayout';
import useRemoveScroll from 'hooks/useRemoveScroll';
import classNames from 'classnames';

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en-US', ['common'])),
  },
});

function ForgetPassword() {

  const router = useRouter();
  const ref = React.useRef(null)

  React.useEffect(() => {
    document.title = removeDashAndCapitalize(router.asPath)
  }, [router.asPath])

  useRemoveScroll(ref)

  return (
    <div ref={ref} className={classNames("overflow-y-auto h-screen")} >
      <LandingLayout>
        <ForgetPasswordContainer />
      </LandingLayout>
    </div>
  );
}

export default ForgetPassword;
