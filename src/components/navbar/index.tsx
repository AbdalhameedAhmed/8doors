import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import classNames from "classnames";

import useWindowSize from "hooks/useWindowSize";
import ThemeSelector from "./themeSelector";
import IconWithMessage from "components/shared/iconWithMessage";
import SearchBar from "./SearchBar"
import ClinicSelector from "./ChooseClinics"

import Bars from "assets/bars.svg";
import ClosedDoor from "assets/closed-door.svg";
import OpenDoor from "assets/open-door.svg";
import SearchIcon from "assets/search.svg"
import SelectLang from "./SelectLang";

type NavbarTypes = {
  smallView: boolean
  setToggle: Function;
  title?: string;
  showSideHeader?: boolean;
  showModalButton?: boolean;
  showModal?: boolean;
  handelModalState?: Function;
};

function Navbar({
  smallView,
  setToggle,
  title = "Title",
  showSideHeader = true,
  showModalButton = false,
  showModal,
  handelModalState,
}: NavbarTypes) {

  const [message, setMessage] = useState("go to dashboard");
  const [path, setPath] = useState("/dashboard");
  const [searchBar, openSearchBar] = useState(false)
  const { width } = useWindowSize();
  const router = useRouter();

  const { asPath } = router;

  const handelSearchBtn = () => {
    openSearchBar(true)
  }

  useEffect(() => {
    let dir = router.locale == "ar" ? "rtl" : "ltr";
    let lang = router.locale == "ar" ? "ar" : "en-US";
    document?.querySelector("html")?.setAttribute("dir", dir);
    document?.querySelector("html")?.setAttribute("lang", lang);
    if (asPath === "/dashboard") {
      setMessage("log out");
      setPath("/login");
    }
  }, [asPath, router.locale]);

  return (
    <>
      <nav
        className={"fixed top-0 right-0 z-20 bg-transparent transition-all duration-300"}
        style={{
          width: width < 1184 ? "100%" : smallView ? "calc(100% - 100px)" : "calc(100% - 250px)"
        }}
      >
        <SearchBar searchBarState={searchBar} changeSearchBarState={openSearchBar} />
        <div
          className={classNames(
            "flex justify-between w-full items-center px-8 xs:px-3 h-20 z-10 relative",
            {
              "right-0": router.locale !== "ar",
              "left-0": router.locale === "ar",
            }
          )}
        >
          <div className="flex w-full justify-between !bg-[rgba(255, 255, 255, 0.8)] backdrop-blur-[6px] w-full h-full items-center">
            <div className="flex gap-5">
              {width <= 1184 && (
                <button onClick={() => { setToggle(true) }}>
                  <Bars className="h-[30px] w-[30px] fill-black fill-secondary hover:fill-primary" />
                </button>

              )}
              <button onClick={() => { handelSearchBtn() }}>
                <SearchIcon className="w-[20px] h-[20px] fill-secondary hover:fill-primary" />
              </button>
            </div>

            <div className="flex justify-venter  items-center gap-2">

              <SelectLang />

              {asPath !== "/dashboard" &&

                <ClinicSelector />
              }

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
