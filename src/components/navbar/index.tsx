import useWindowSize from 'hooks/useWindowSize';
import React, { useEffect, useState } from 'react';
import Bars from 'assets/bars.svg';
import CustomInput from 'components/shared/customInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

type Props = {
  setToggle: Function;
};

function Navbar({ setToggle }: Props) {
  const { i18n } = useTranslation();
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
    <nav className={`bg-sky-500/100 flex justify-between items-center px-4 h-20`}>
      <div className="flex w-full justify-between  h-full items-center">
        <div className="flex gap-5">
          {width <= 1184 ? (
            <button onClick={() => setToggle((s: boolean) => !s)}>
              <Bars style={{ height: 23, width: 43, color: '#fff' }} />
            </button>
          ) : (
            <React.Fragment></React.Fragment>
          )}

          {/* <CustomInput
            placeholder="search"
            className={`signin-signout-input w-full rounded-lg `}
          /> */}
        </div>

            

        <div className="flex items-center gap-5">
          <FontAwesomeIcon icon={faGlobe} />
          <select
            className={`signin-signout-input w-full rounded-lg`}
            name="language"
            value={router?.locale}
            onChange={(e) => router.push({ pathname, query }, asPath, { locale: e.target.value })}
          >
            <option value="en-US">English</option>
            <option value="fr">France</option>
            <option value="ar">Arabic</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
