import { CustomInput } from 'components/shared';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/logo.svg';
import styles from './style.module.css';

function Index() {
  const { t } = useTranslation('common');

  return (
    <div className="self-center px-10 py-10 w-96">
      <div className="flex  align-center justify-center">
        <Logo style={{ height: 65, width: 65 }} />
      </div>
      <h1 className={styles.title}>Forgot Password?</h1>
      <h4 className="text-white text-center">
        Enter your e-mail address below to reset your password.
      </h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <CustomInput
          placeholder="Enter Email"
          label={''}
          className={`signin-signout-input w-full rounded-lg`}
        />

        <button className="mt-8 w-full text-white p-4 bg-sky-500/100 rounded-lg">
          {t('signup.signup')}
        </button>
        <p className="my-2 text-sm text-white text-center flex justify-center">
          <b>Need Help?</b>
        </p>
      </form>
    </div>
  );
}

export default Index;
