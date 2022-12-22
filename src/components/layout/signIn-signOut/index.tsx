import React from 'react';
import SignInSignUpFooter from './Footer';
import Navbar from './Navbar';
import styles from './styles.module.css';

interface Props {
  children?: React.ReactNode;
  type?: 'SIGN UP' | 'SIGN IN';
  signOnClick: () => void;
}

function SignInSignOutLayout({ type = 'SIGN UP', children, signOnClick = () => {} }: Props) {
  return (
    <div className={styles.all}>
      <div className={`${styles.container} lg:px-10`}>
        <Navbar signType={type} signOnClick={signOnClick} />
        {children}
        <SignInSignUpFooter />
      </div>
    </div>
  );
}

export default SignInSignOutLayout;
