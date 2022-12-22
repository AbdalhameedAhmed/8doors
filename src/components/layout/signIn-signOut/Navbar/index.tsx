import React from 'react';
import styles from './styles.module.css';
interface Props {
  signType: 'SIGN UP' | 'SIGN IN';
  signOnClick: () => void;
}
function Navbar({ signType, signOnClick = () => {} }: Props) {
  return (
    <div className="flex justify-between items-center">
      <div className={styles.logo}>8door</div>
      <div className="flex justify-evenly items-center">
        <button
          className={`${styles.signUpBtn}
         btn rounded-lg bg-white`}
          onClick={signOnClick}
        >
          {signType}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
