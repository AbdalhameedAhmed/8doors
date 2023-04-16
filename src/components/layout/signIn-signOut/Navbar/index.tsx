import React from 'react';
interface NavebarTypes {
  signType: 'SIGN UP' | 'SIGN IN';
  signOnClick: () => void;
}
function Navbar({ signType, signOnClick = () => { } }: NavebarTypes) {
  return (
    <div className="flex justify-between items-center">
      <div className="text-white">8door</div>
      <div className="flex justify-between gap-4 items-center">
        {signType === "SIGN UP" && <h1 className="text-white">Don&apos;t have an account?</h1>}
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
