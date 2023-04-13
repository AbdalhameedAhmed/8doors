import useWindowSize from "hooks/useWindowSize";
import React, { useState, useEffect } from "react";
import Bars from "assets/bars.svg";
import { useRouter } from "next/router";
import classNames from "classnames";
import ThemeSelector from "./themeSelector";
import IconWithMessage from "components/shared/iconWithMessage";
import ClosedDoor from "assets/closed-door.svg";
import OpenDoor from "assets/open-door.svg";
type Props = {
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
}: Props) {
  const { width } = useWindowSize();
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const [message, setMessage] = useState("go to dashboard");
  const [path, setPath] = useState("/dashboard");
  let iconInfo = { message: "", path: "" };
  useEffect(() => {
    let dir = router.locale == "ar" ? "rtl" : "ltr";
    let lang = router.locale == "ar" ? "ar" : "en-US";
    document?.querySelector("html")?.setAttribute("dir", dir);
    document?.querySelector("html")?.setAttribute("lang", lang);
    if (asPath === "/dashboard") {
      setMessage("Log Out");
      setPath("/login");
    }
  }, [router.locale]);

  return (
    <>
      <nav
        className={"relative top-0 z-20 bg-primary"}
        style={{
          width: width > 1184 ? "calc(100vw - 250px)" : "100vw",
        }}
      >
        <div
          className={classNames(
            "bg-primary flex justify-between w-full items-center px-5 xs:px-3 h-20 shadow-md z-10 relative",
            {
              "right-0": router.locale !== "ar",
              "left-0": router.locale === "ar",
            }
          )}
        >
          <div className="flex w-full justify-between w-full h-full items-center">
            <div className="flex gap-5">
              {width <= 1184 && (
                <button onClick={() => setToggle((s: boolean) => !s)}>
                  <Bars style={{ height: 23, width: 43, color: "#fff" }} />
                </button>
              )}
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
        {showSideHeader && (
          <div className="p-5 xs:p-3 bg-primary z-0 h-[66px] flex justify-between items-center">
            <h2 className="text-xl text-secondaryص font-medium">{title}</h2>
            {showModalButton && (
              <div className="mr-[4px]">

              <button
                onClick={() => {
                  handelModalState && handelModalState(!showModal);
                }}
                className="modalBtn bg-primary border-[1px] py-[5px] text-secondary px-[20px] border-black rounded-lg overflow-visible inline-block touch-manipulation"
                >
                Add staff
              </button>
                </div>
            )}
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
