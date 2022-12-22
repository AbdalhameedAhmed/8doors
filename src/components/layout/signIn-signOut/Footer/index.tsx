import Link from 'next/link';
import React from 'react';

function SignInSignUpFooter() {
  return (
    <div className="flex flex-wrap justify-between items-center">
      <div className="flex w-64 justify-between">
        <Link href="/contact">
          <p className="text-white">CONTACT US</p>
        </Link>
        <Link href="/about">
          <p className="text-white">ABOUT US</p>
        </Link>
        <Link href="/faq">
          <p className="text-white">FAQ</p>
        </Link>
      </div>
      <div className="">
        <p className="text-white">&copy; {new Date().getFullYear()} 8doors</p>
      </div>
    </div>
  );
}

export default SignInSignUpFooter;
