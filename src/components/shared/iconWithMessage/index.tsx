import { useRouter } from "next/router";
function IconWithMessage({ visibleIcon, hoverIcon, message, goto }: any) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(goto);
      }}
      className="icon group cursor-pointer relative before:content-[''] before:absolute before:hidden hover:before:block before:top-[16px] before:-left-0 before:border-[8px] before:border-t-transparent before:border-r-transparent before:border-l-transparent before:border-layout-primary"
    >
      <button className="group [&_svg]:w-[25px] [&_svg]:fill-secondary [&_svg]:h-[25px]">
        <div className="visible-icon group-hover:hidden">{visibleIcon}</div>
        <div className="hover-icon hidden group-hover:block">{hoverIcon}</div>
      </button>
      <div className="absolute top-[30px] -right-[20px] bg-layout-primary text-secondary hidden group-hover:block  rounded px-4 py-2 group-hover:block group-hover:block">
        <p className="text-sm w-max">{message}</p>
      </div>
    </div>
  );
}

export default IconWithMessage;
