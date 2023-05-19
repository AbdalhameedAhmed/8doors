import React from 'react';

import classNames from 'classnames';

import SignInSignUpFooter from './Footer';
import Navbar from './Navbar';
import Logo from "assets/logo.svg";
import Doctor from "assets/undraw_doctor_kw5l.png"

interface signinSignoutTypes {
  children?: React.ReactNode;
  title: string
  type?: 'SIGN UP' | 'SIGN IN';
  cardContainerStyle?: string;
}

function SignInSignOutLayout({ type = 'SIGN UP', children, title, cardContainerStyle }: signinSignoutTypes) {

  return (
    <div className="w-screen h-screen flex">
      <p className={classNames("text-logo fixed top-[40px] left-[40px] z-40 text-4xl font-bold transition-all duration-300")}>8D</p>
      <div className={`login-layout w-full h-full flex-1 flex flex-col justify-center items-center bg-center scale-x-[-1] bg-no-repeat xs:hidden sm:hidden md:hidden`}>
        <p className='scale-x-[-1] max-w-[30%] lg:max-w-[100%] text-center text-[2rem] font-[700] mb-[80px] text-primary'>{title}</p>
        <div className='scale-x-[-1] relative'>
          <span className='w-[500px] h-[500px] absolute top-1/2 left-1/2 rounded-full -translate-x-1/2
          -translate-y-1/2 bg-gradient-to-b from-[#f3f4f6] to-[#f8fafc] opacity-80 -z-10'></span>
          <img src={Doctor.src} alt="" className='w-[720px] relative z-10 ' />
        </div>
      </div>

      <div className={classNames('w-[480px] pt-[240px] xs:py-[120px] sm:py-[120px] md:py-[120px]  flex justify-center items-center xs:w-full bg-primary sm:w-full md:w-full', cardContainerStyle)}>
        {children}
      </div>

    </div>
  );
}

export default SignInSignOutLayout;
