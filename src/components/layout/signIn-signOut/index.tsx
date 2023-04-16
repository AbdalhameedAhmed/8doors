import React from 'react';

import SignInSignUpFooter from './Footer';
import Navbar from './Navbar';

interface signinSignoutTypes {
  children?: React.ReactNode;
  type?: 'SIGN UP' | 'SIGN IN';
  signOnClick: () => void;
}

function SignInSignOutLayout({ type = 'SIGN UP', children, signOnClick = () => { } }: signinSignoutTypes) {
  return (
    <div className="w-full h-full bg-doctor bg-cover bg-center absolute -z-10">
      <div className={`w-full h-full flex flex-col z-10 justify-between bg-[rgba(0,0,0,0.5)] py-[15px] px-[51.5px] xs:px-[15px] lg:px-10`}>
        <Navbar signType={type} signOnClick={signOnClick} />
        {children}
        <SignInSignUpFooter />
      </div>
    </div>
  );
}

export default SignInSignOutLayout;
