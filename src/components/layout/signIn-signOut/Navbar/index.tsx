import React from 'react';
import styles from './styles.module.css';
interface Props {
  signType: 'SIGN UP' | 'SIGN IN';
  signOnClick: () => void;
}
function Navbar({ signType, signOnClick = () => { } }: Props) {
  return (
    <div className="flex justify-between items-center">
      <div className="text-white">8door</div>
      <div className="flex justify-evenly items-center">
        <button
          className={`py-[11px] px-[22px] btn rounded-lg bg-white`}
          onClick={signOnClick}
        >
          {signType}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
