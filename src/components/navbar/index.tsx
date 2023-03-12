import useWindowSize from "hooks/useWindowSize";
import React, { useEffect } from "react";
import Bars from "assets/bars.svg";
import { useRouter } from "next/router";
import classNames from "classnames";
import ThemeSelector from "./themeSelector";

type Props = {
  setToggle: Function;
  title?: string;
  subtitle?: string;
  showSideHeader?: boolean;
  showModalButton?: boolean
  showModal?: boolean;
  handelModalState?: Function;
};

function Navbar({ setToggle, title = "Title", subtitle = "subtitle", showSideHeader = true, showModalButton = false, showModal, handelModalState }: Props) {
  const { width } = useWindowSize();
  const router = useRouter();
  const { pathname, asPath, query } = router;

  useEffect(() => {
    let dir = router.locale == "ar" ? "rtl" : "ltr";
    let lang = router.locale == "ar" ? "ar" : "en-US";
    document?.querySelector("html")?.setAttribute("dir", dir);
    document?.querySelector("html")?.setAttribute("lang", lang);
  }, [router.locale]);

  return (
    <>
      <nav className={"relative top-0 z-20 bg-primary"} style={{
        width: width > 1184 ? "calc(100vw - 250px)" : "100vw",
      }}
      >
        <div className={classNames(
          "bg-primary flex justify-between w-full items-center px-4 h-20 shadow-md z-10 relative",
          { "right-0": router.locale !== "ar", "left-0": router.locale === "ar" }
        )}>
          <div className="flex w-full justify-between w-full h-full items-center">
            <div className="flex gap-5">
              {width <= 1184 && (
                <button onClick={() => setToggle((s: boolean) => !s)}>
                  <Bars style={{ height: 23, width: 43, color: "#fff" }} />
                </button>
              )}
            </div>
            <ThemeSelector />
          </div>

        </div>
        {
          showSideHeader && (
            <div className='p-[15px] bg-primary z-0  relative flex justify-between items-center pl-8 pr-12'>
              <h2 className='text-xl text-white font-medium'>
                {title}
                <small className='block text-white text-[13px] font-normal mt-2 h-fit'>
                  {subtitle}
                </small>
              </h2>
              {
                showModalButton && (
                  <button
                    onClick={() => { handelModalState && handelModalState(!showModal) }}
                    className="modalBtn bg-primary border-[1px] py-[5px] text-white px-[20px] border-black rounded-lg overflow-visible inline-block touch-manipulation"
                  >
                    Add
                  </button>
                )
              }
            </div>
          )
        }
      </nav>
    </>
  );
}

export default Navbar;
