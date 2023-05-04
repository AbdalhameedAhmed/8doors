import React, { useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import Navbar from "components/navbar";
import SideNav from "components/sidenav";
import useWindowSize from "hooks/useWindowSize";
import { mainMenuItems, menuItemsType } from "components/sidenav/utils"
import { dashboardItems, dashboardItemsType } from "components/sidenav/dashboardUtils"
import { basicLayoutTypes } from "types/basicLayoutTypes"
import classNames from "classnames";

const ProtectedRoute = dynamic(() => import("components/protectedRoute"), {
  ssr: false,
});

function BasicLayout({
  navbarTitle,
  children,
  showModal,
  handelModalState,
  showModalButton = false,
}: basicLayoutTypes) {

  const [toggle, setToggle] = useState(false);
  const [smallView, changeSmallView] = React.useState(false)
  const [sidenavItems, changeSideNavItems] = useState<menuItemsType | dashboardItemsType>(mainMenuItems)
  const [thumb, setShowThumb] = React.useState(false)

  const { width } = useWindowSize();
  const router = useRouter();

  const { asPath } = router;

  const handleScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const element = event.target as HTMLDivElement;
    if (element.scrollHeight > element.clientHeight) {
      setShowThumb(true);
      setTimeout(() => setShowThumb(false), 2000);
    }
  }



  React.useEffect(() => {
    (asPath === "/dashboard" || asPath.startsWith("/settings")) && changeSideNavItems(dashboardItems)
  }, [asPath])

  return (
    <ProtectedRoute>


      <div className="w-screen h-screen overflow-hidden bg-primary flex scrollbar-custom">
        {
          <SideNav toggle={toggle} sideNavItems={sidenavItems} smallView={smallView} changeSmallView={changeSmallView} setToggle={setToggle} />
        }
        <div
          className={classNames("layout w-full flex-1 overflow-y-auto py-[80px] scrollbar-custom bg-primary", { "showScroll": thumb })}
          onScroll={(event) => { handleScroll(event) }}
          style={{
            // marginLeft: width > 1184 && router.locale !== "ar" ? "250px" : 0,
            // marginRight: width > 1184 && router.locale === "ar" ? "250px" : 0,
          }}
        >

          <Navbar
            smallView={smallView}
            setToggle={setToggle}
            showModal={showModal}
            handelModalState={handelModalState}
            showModalButton={showModalButton}
            title={navbarTitle}
          />
          {children}
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default BasicLayout;
