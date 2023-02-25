import Link from 'next/link';
import React from 'react';

export function ModalPageFooter() {
  return (
    <section className='flex flex-wrap justify-between items-center'>
      <ul className='flex w-64 justify-between list-none'>
        <li className='text-white'>
          <Link href='/contact'>CONTACT US</Link>
        </li>
        <li className='text-white'>
          <Link href='/about'>ABOUT US</Link>
        </li>
        <li className='text-white'>FAQ</li>
      </ul>
      <span className='text-white'>
        &copy; {new Date().getFullYear()} 8doors
      </span>
    </section>
  );
}
