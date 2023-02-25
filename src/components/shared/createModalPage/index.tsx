import React from 'react';
import { ModalPageFooter } from '../modalPageFooter';

interface Props {
  children?: React.ReactNode;
  topRightAction?: React.ReactNode;
}

export function ModalPage({
  children,
  topRightAction = <React.Fragment />,
}: Props) {
  return (
    <div className='stethoscopeBg w-screen h-screen bg-center bg-cover z-[-1] absolute'>
      <div className='flex flex-col justify-between h-full bg-black-dark/50 px-[51.5px] py-[15px] z-[1] lg:px-10'>
        <section className='flex justify-between items-center'>
          <h1 className='text-base text-white'>8door</h1>
          <div className='flex justify-evenly items-center'>
            {topRightAction}
          </div>
        </section>
        <section className='flex justify-center items-center'>
        {children}
        </section>
        <ModalPageFooter />
      </div>
    </div>
  );
}
