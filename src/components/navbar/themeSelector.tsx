import { useEffect, useState, useRef } from "react";
import useOnClickOutside from "hooks/useOnClickOutside";
import Light from "../../assets/sun-solid.svg";
import Dark from "../../assets/moon-solid.svg";
import Custom from "../../assets/paintbrush-solid.svg";
import classNames from "classnames";
import MainAnimation from "../shared/mainAnimation";

export default function ThemeSelector() {
  let [theme, setTheme] = useState("");
  let [menu, openMenu] = useState(false);
  const ref = useRef(null);
  // useOnClickOutside(ref, () => openMenu(false));

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
    <>
      <button
        className="text-white text-lg relative"
        ref={ref}
        onClick={() => {
          openMenu(!menu);
        }}
      >
        {!theme ? (
          <Light className="w-[20px] fill-secondary mr-8 box-content p-2 " />
        ) : theme === "dark" ? (
          <Dark className="w-[20px] fill-secondary mr-8 box-content p-2 " />
        ) : (
          <Custom className="w-[20px] fill-secondary mr-8 box-content p-2 " />
        )}
      </button>

      <MainAnimation
        startanimation={menu}
        className="absolute shadow-md shadow-black/50 py-2 w-[150px] top-[80px] -z-50 right-[25px] bg-secondary rounded-xl "
      >
        {/* <div
          className={classNames(
            "absolute transition duration-200 shadow-md shadow-black/50 py-2 w-[150px] top-[80px] -z-50 right-[25px] bg-secondary rounded-xl "
          )}
          ref={ref}
        > */}
        <ul className="flex flex-col text-secondary ">
          <li>
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
                  "inline-block w-[15px] duration-200 fill-secondary mr-1 box-content p-2 ",
                  { "fill-primary": !theme }
                )}
              />
              Light
            </button>
          </li>
          <li>
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
                  "inline-block w-[15px] fill-secondary duration-200 mr-1 box-content p-2 ",
                  { "fill-primary": theme === "dark" }
                )}
              />
              Dark
            </button>
          </li>
          <li>
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
                  "inline-block w-[15px] fill-secondary duration-200 mr-1 box-content p-2 ",
                  { "fill-primary": theme === "custom" }
                )}
              />
              Custom
            </button>
          </li>
        </ul>
        {/* </div> */}
      </MainAnimation>
    </>
  );
}
