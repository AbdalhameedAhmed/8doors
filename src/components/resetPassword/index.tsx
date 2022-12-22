import CustomInput from 'components/shared/customInput';
import React from 'react';
import Logo from '../../assets/logo.svg';
import styles from './style.module.css';

function index() {
  return (
    <div className="self-center px-10 py-10 w-96">
      <div className="flex  align-center justify-center">
        <Logo style={{ height: 65, width: 65 }} />
      </div>
      <h1 className={styles.title}>Forgot Password?</h1>
      <h4 className="text-white text-center">Enter your new password.</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <CustomInput
          placeholder="Enter New Password"
          label={''}
          className={`signin-signout-input w-full rounded-lg`}
          type="password"
        />
        <CustomInput
          placeholder="Confirm new password"
          label={''}
          className={`signin-signout-input w-full rounded-lg`}
          type="password"
        />
        <button className="mt-8 w-full text-white p-4 bg-sky-500/100 rounded-lg">
          Change password
        </button>
        <p className="my-2 text-sm text-white text-center flex justify-center">
          <b>Need Help?</b>
        </p>
      </form>
    </div>
  );
}

export default index;
