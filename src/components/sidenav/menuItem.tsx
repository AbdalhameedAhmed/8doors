import React from "react";
import { useRouter } from "next/router";

import classNames from "classnames";

import { menuitemType } from "./utils";

import RightAngle from "assets/angle-right-solid.svg"

type menuTypes = {
  item: menuitemType;
  children?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  smallView?: boolean
  removeIcon?: boolean
  activeIconStyle?: string;
  liStyles?:string
  activeStyle?: string;
  onClick?: () => void;
  textContainerStyle?: string
};

export default function MenuItem({
  item,
  className = "",
  removeIcon = false,
  rightIcon = <React.Fragment />,
  children = <React.Fragment />,
  activeStyle = "font-bold !text-theme-primary bg-theme-secondary [&_svg]:fill-primary ",
  onClick = () => { },
  liStyles="",
  smallView = false,
  textContainerStyle = ""
}: menuTypes) {

  const router = useRouter();

  const { label, icon, path, display } = item;


  if (!display) return <React.Fragment></React.Fragment>;

  return (
    <li
      className={classNames(
        "flex flex-col w-full cursor-pointer relative text-4 capitalize group px-4 sidenavItems",
        {
          "text-secondary": path !== router.asPath,
          "!absolute bottom-0 left-0 bg-layout-primary": item.static,
          "!px-0": removeIcon
        },
        liStyles

      )}
      onClick={onClick}
    >
      <a
        onClick={() => path.length && router.push(path)}
        className={classNames(
          "flex justify-between items-center py-[14px] px-[10px] flex-row rounded-lg ease-in-out w-full ",
          className,
          {
            "py-5 px-[30px]": item.static,
            "!py-4 buttom-0.5": item.static && smallView,
            "py-[8px] px-4 rounded-lg flex-col relative": smallView,
            "!px-0": removeIcon
          },
          path === router.asPath && activeStyle
        )}
      >
        <div className={classNames(textContainerStyle, "flex gap-4 items-center justify-center ", { "!flex-col !gap-2": smallView })}>

          <div className="relative">
            {!removeIcon && (icon)}
            <div className="">
              {item.submenu?.length !== 0 && (
                <span className={classNames("absolute  top-[5px] -translate-y-1/2 -right-[15px] w-[5px] h-[5px] block", { "hidden": !smallView })}>
                  <RightAngle classNames=" w-[5px] h-[5px]" />
                </span>
              )}
            </div>
          </div>
          <span className={classNames({ "text-[10px]": smallView })}>{label}</span>
        </div>
        <span className={classNames({ "hidden": smallView })}>{rightIcon}</span>
      </a>
      {children}
    </li>
  );
}
