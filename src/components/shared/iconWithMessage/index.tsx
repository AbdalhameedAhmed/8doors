import { useRouter } from "next/router";

import { useDispatch } from "react-redux"
import { clearUser } from "redux/slices/auth"

function IconWithMessage({ visibleIcon, hoverIcon, message, goto }: any) {

  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        router.push(goto);
        if (message == "Log Out") {
          dispatch(clearUser())
        }
      }}
      className="icon group cursor-pointer relative"
    >
      <button className="group relative [&_svg]:w-[25px] [&_svg]:fill-secondary [&_svg]:h-[25px] ">
        <div className="visible-icon group-hover:hidden">{visibleIcon}</div>
        <div className="hover-icon hidden group-hover:block">{hoverIcon}</div>
      </button>
      <div className="absolute top-[55px] max-h-0 p-0 -right-[15px] bg-layout-primary text-secondary transition-all duration-500 group-hover:max-h-[100px] overflow-hidden rounded ">
        <p className="text-sm w-max px-4 py-2">{message}</p>
      </div>
    </div>
  );
}

export default IconWithMessage;

