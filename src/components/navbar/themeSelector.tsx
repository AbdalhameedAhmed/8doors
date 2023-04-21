import React, { useEffect, useState, useRef } from "react";

import classNames from "classnames";

import HeightAnimation from "animations/HeightAnimation";
import useOnClickOutside from "hooks/useOnClickOutside"


import Custom from "../../assets/paintbrush-solid.svg";
import Dark from "../../assets/moon-solid.svg";
import Light from "../../assets/sun-solid.svg";

export default function ThemeSelector() {

  let [theme, setTheme] = useState("");
  let [menu, openMenu] = useState(false);
  const menuRef = React.useRef(null)


  const outSideHandler = () => {
    openMenu(false)
  }

  useOnClickOutside(menuRef, outSideHandler)


  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "");
    localStorage.getItem("theme") &&
      document.documentElement.classList.add(
        localStorage.getItem("theme") || ""
      );
  }, []);

  function changeTheme(themeName: string) {
    localStorage.setItem("theme", themeName);
    if (themeName) {
      document.documentElement.className = "";
      document.documentElement.classList.add(themeName);
    } else document.documentElement.className = "";

    setTheme(themeName);
    openMenu(false);
  }

  return (
    <div className="relative" ref={menuRef}>
      <div className={classNames("p-1 rounded-full relative w-[45px] h-[45px] flex items-center justify-center hover:bg-layout-secondary", { "bg-layout-secondary": menu })}
        onClick={() => {
          openMenu(!menu);
        }}

      >

        <button
          className="text-white text-lg relative flex justify-center items-center"
        >
          {!theme ? (
            <Light className="w-[20px] fill-secondary box-content " />
          ) : theme === "dark" ? (
            <Dark className="w-[20px] fill-secondary box-content " />
          ) : (
            <Custom className="w-[20px] fill-secondary box-content " />
          )}
        </button>

        <span className={classNames("absolute z-20 border-[1px] !border-[rgba(145, 158, 171, 0.12)] border-b-transparent transition-all duration-500 border-r-transparent opacity-0 scale-0 origin-[90%_0%]  w-[10px] h-[10px] bg-white rotate-[45deg] -bottom-[6px] right-[15px]", {
          "scale-100 opacity-100": menu
        })}
        ></span>

        <ul className={classNames("absolute top-[42px] rounded-xl right-0 w-[180px] transition-all duration-500 opacity-0 scale-0 origin-[90%_0%] bg-white flex flex-col items-start justify-evenly gap-1 p-2", {
          "scale-100 opacity-100": menu
        })}
          style={{
            boxShadow: "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) -20px 20px 40px"
          }}
        >

          <li className={classNames("flex gap-4 hover:bg-layout-secondary w-full p-1 cursor-pointer items-center rounded-lg", {
            "bg-layout-secondary": !theme
          })}>
            <button
              className={classNames(
                "hover:bg-layout-secondary duration-200 w-full text-left px-2",
                { "text-primary": !theme }
              )}
              onClick={() => {
                changeTheme("");
              }}
            >
              <Light
                className={classNames(
                  "inline-block w-[15px] duration-200 fill-secondary  box-content p-2 ",
                  { "fill-primary": !theme }
                )}
              />
              Light
            </button>
          </li>
          <li className={classNames("flex gap-4 hover:bg-layout-secondary w-full p-1 cursor-pointer items-center rounded-lg", {
            "bg-layout-secondary": theme === "dark"
          })}>
            <button
              className={classNames(
                "hover:bg-layout-secondary w-full duration-500 text-left px-2",
                { "text-primary": theme === "dark" }
              )}
              onClick={() => {
                changeTheme("dark");
              }}
            >
              <Dark
                className={classNames(
                  "inline-block w-[15px] fill-secondary duration-200 box-content p-2 ",
                  { "fill-primary": theme === "dark" }
                )}
              />
              Dark
            </button>
          </li>
          <li className={classNames("flex gap-4 hover:bg-layout-secondary w-full p-1 cursor-pointer items-center rounded-lg", {
            "bg-layout-secondary": theme === "custom"
          })}>
            <button
              className={classNames(
                "hover:bg-layout-secondary w-full duration-200 text-left px-2",
                { "text-primary": theme === "custom" }
              )}
              onClick={() => {
                changeTheme("custom");
              }}
            >
              <Custom
                className={classNames(
                  "inline-block w-[15px] fill-secondary duration-200 box-content p-2 ",
                  { "fill-primary": theme === "custom" }
                )}
              />
              Custom
            </button>
          </li>
        </ul>

      </div>
    </div>
  );
}
