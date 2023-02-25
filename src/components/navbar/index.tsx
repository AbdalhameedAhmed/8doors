import useWindowSize from 'hooks/useWindowSize';
import React, { useEffect, useState } from 'react';
import Bars from 'assets/bars.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { CustomInput } from 'components/shared';
import classNames from 'classnames';

type Props = {
  setToggle: Function;
};

function Navbar({ setToggle }: Props) {
  const { width } = useWindowSize();
  const router = useRouter();
  const { pathname, asPath, query } = router;

  useEffect(() => {
    let dir = router.locale == 'ar' ? 'rtl' : 'ltr';
    let lang = router.locale == 'ar' ? 'ar' : 'en-US';
    document?.querySelector('html')?.setAttribute('dir', dir);
    document?.querySelector('html')?.setAttribute('lang', lang);
  }, [router.locale]);

  return (
    <nav className={classNames('bg-primary flex justify-between items-center px-4 h-20 shadow-md fixed top-0 z-10',
    {'right-0': router.locale !== 'ar', 'left-0': router.locale === 'ar' })}
    style={{ width: width > 1184 ? 'calc(100vw - 250px)' : '100vw' ,
    }}>
      <div className="flex w-full justify-between w-full h-full items-center">
        <div className="flex gap-5">
          {width <= 1184 && (
            <button onClick={() => setToggle((s: boolean) => !s)}>
              <Bars style={{ height: 23, width: 43, color: '#fff' }} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
