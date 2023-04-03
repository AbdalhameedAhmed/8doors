import Navbar from "components/navbar";
import SideNav from "components/sidenav";
import useWindowSize from "hooks/useWindowSize";
import { useRouter } from "next/router";
import { mainMenuItems,menuItemsType} from "components/sidenav/utils"
import { dashboardItems,dashboardItemsType} from "components/sidenav/dashboardUtils"
import React, { useState } from "react";
import ProtectedRoute from "components/protectedRoute"
type Props = {
  children?: React.ReactNode;
  showModal?: boolean;
  showModalButton?: boolean;
  handelModalState?: Function;
};

function BasicLayout({
  children,
  showModal,
  handelModalState,
  showModalButton = false,
}: Props) {

  const [toggle, setToggle] = useState(false);
  const [sidenavItems,changeSideNavItems] = useState<menuItemsType|dashboardItemsType>
  (mainMenuItems)

  const { width } = useWindowSize();
  const router = useRouter();

  const { asPath } = router;

  React.useEffect(()=>{
    asPath === "/dashboard" && changeSideNavItems(dashboardItems)
  },[asPath])

  return (
    <ProtectedRoute>

      <div className="w-screen">
        {   
          <SideNav toggle={toggle} sideNavItems={sidenavItems} setToggle={setToggle} />
        }
        <div
          className="layout"
          style={{
            marginLeft: width > 1184 && router.locale !== "ar" ? "250px" : 0,
            backgroundColor: "#fff",
            marginRight: width > 1184 && router.locale === "ar" ? "250px" : 0,
          }}
        >
          <Navbar
            setToggle={setToggle}
            showModal={showModal}
            handelModalState={handelModalState}
            showModalButton={showModalButton}
          />
          {children}
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default BasicLayout;
