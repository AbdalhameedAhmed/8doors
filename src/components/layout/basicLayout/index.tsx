import React, { useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import Navbar from "components/navbar";
import SideNav from "components/sidenav";
import useWindowSize from "hooks/useWindowSize";
import { mainMenuItems, menuItemsType } from "components/sidenav/utils"
import { dashboardItems, dashboardItemsType } from "components/sidenav/dashboardUtils"
import { basicLayoutTypes } from "types/basicLayoutTypes"

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
  const { width } = useWindowSize();
  const router = useRouter();

  const { asPath } = router;

  React.useEffect(() => {
    (asPath === "/dashboard" || asPath.startsWith("/settings")) && changeSideNavItems(dashboardItems)
  }, [asPath])

  return (
    <ProtectedRoute>

      <div className="w-screen h-screen overflow-hidden flex">
        {
          <SideNav toggle={toggle} sideNavItems={sidenavItems} smallView={smallView} changeSmallView={changeSmallView} setToggle={setToggle} />
        }
        <div
          className="layout w-full flex-1 overflow-y-auto py-[80px]"
          style={{
            // marginLeft: width > 1184 && router.locale !== "ar" ? "250px" : 0,
            backgroundColor: "#fff",
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
