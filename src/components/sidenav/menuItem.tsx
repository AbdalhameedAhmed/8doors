import classNames from "classnames";
import { useRouter } from "next/router";
import React from "react";
import { menuitemType } from "./utils";

type Props = {
  item: menuitemType;
  children?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  activeIconStyle?: string;
  activeStyle?: string;
  onClick?: () => void;
};

export default function MenuItem({
  item,
  className = "",
  rightIcon = <React.Fragment />,
  children = <React.Fragment />,
  activeStyle = "font-bold text-active [&_svg]:fill-primary",
  onClick = () => {},
}: Props) {
  const { label, icon, path, display } = item;
  const router = useRouter();

  if (!display) return <React.Fragment></React.Fragment>;
  return (
    <li
      className={classNames(
        "flex flex-col w-full cursor-pointer text-4 capitalize ",
        {
          "text-secondary": path !== router.asPath,
          "absolute bottom-0 left-0 bg-layout-primary": item.static,
        },
        path === router.asPath && activeStyle
      )}
      onClick={onClick}
    >
      <a
        onClick={() => path.length && router.push(path)}
        className={classNames(
          "flex justify-between items-center py-[14px] px-[10px] group hover:text-active ease-in-out duration-[2]",
          className,
          { "py-5 px-[30px]": item.static }
        )}
      >
        <div className="flex gap-4 items-center">
          {!!icon && icon}
          {label}
        </div>
        {rightIcon}
      </a>
      {children}
    </li>
  );
}
