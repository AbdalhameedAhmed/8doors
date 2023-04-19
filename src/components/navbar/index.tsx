import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import classNames from "classnames";

import useWindowSize from "hooks/useWindowSize";
import ThemeSelector from "./themeSelector";
import IconWithMessage from "components/shared/iconWithMessage";

import Bars from "assets/bars.svg";
import ClosedDoor from "assets/closed-door.svg";
import OpenDoor from "assets/open-door.svg";
import SearchIcon from "assets/search.svg"

type NavbarTypes = {
  setToggle: Function;
  title?: string;
  showSideHeader?: boolean;
  showModalButton?: boolean;
  showModal?: boolean;
  handelModalState?: Function;
};

function Navbar({
  setToggle,
  title = "Title",
  showSideHeader = true,
  showModalButton = false,
  showModal,
  handelModalState,
}: NavbarTypes) {

  const [message, setMessage] = useState("go to dashboard");
  const [path, setPath] = useState("/dashboard");
  const [searchBar,openSearchBar] = useState(false)
  const { width } = useWindowSize();
  const router = useRouter();

  const { asPath } = router;

  const handelSearchBtn = ()=>{
    openSearchBar(true)
    console.log(searchBar);
    
  }

  useEffect(() => {
    let dir = router.locale == "ar" ? "rtl" : "ltr";
    let lang = router.locale == "ar" ? "ar" : "en-US";
    document?.querySelector("html")?.setAttribute("dir", dir);
    document?.querySelector("html")?.setAttribute("lang", lang);
    if (asPath === "/dashboard") {
      setMessage("Log Out");
      setPath("/login");
    }
  }, [asPath, router.locale]);

  return (
    <>
      <nav
        className={"relative top-0 z-20 !bg-white w-full "}
        style={{
        }}
      >
        <div
          className={classNames(
            "bg-primary flex justify-between w-full !bg-white items-center px-5 xs:px-3 h-20 z-10 relative",
            {
              "right-0": router.locale !== "ar",
              "left-0": router.locale === "ar",
            }
          )}
        >
          <div className="flex w-full justify-between w-full h-full items-center">
            <div className="flex gap-5">
              {width <= 1184 && (
                  <Bars className="h-[20px] w-[30px] !fill-red-500" />
                
              )}
              <button onClick={()=>{handelSearchBtn()}}>
              <SearchIcon className="w-[20px] h-[20px]" />
              </button>
            </div>

            <div className="flex justify-venter  items-center gap-4">
              <ThemeSelector />
              <IconWithMessage
                visibleIcon={<ClosedDoor />}
                hoverIcon={<OpenDoor />}
                message={message}
                goto={path}
              />
            </div>
          </div>
        </div>


      </nav>
    </>
  );
}

export default Navbar;
