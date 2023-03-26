import { useRouter } from "next/router";
function IconWithMessage({ visibleIcon, hoverIcon, message, goto }: any) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(goto);
        if (message == "Log Out") {
          localStorage.setItem("token", "")
        }
      }}
      className="icon group cursor-pointer relative"
    >
      <button className="group relative [&_svg]:w-[25px] [&_svg]:fill-secondary [&_svg]:h-[25px] ">
        <div className="visible-icon group-hover:hidden">{visibleIcon}</div>
        <div className="hover-icon hidden group-hover:block">{hoverIcon}</div>
      </button>
      <div className="absolute top-[55px] max-h-0 p-0 -right-[20px] bg-layout-primary text-secondary transition-all duration-500 group-hover:max-h-[100px] overflow-hidden rounded ">
        <p className="text-sm w-max px-4 py-2">{message}</p>
      </div>
    </div>
  );
}

export default IconWithMessage;

// before:content-[''] before:-translate-y-[100px] group-hover:before:translate-y-0 before:transition before:duration-300 before:absolute before:-bottom-[5px] before:left-[4px] before:border-[8px] before:border-t-transparent before:border-r-transparent before:border-l-transparent before:border-layout-primary
