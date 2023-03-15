import Navbar from "components/navbar";
import SideNav from "components/sidenav";
import useWindowSize from "hooks/useWindowSize";
import { useRouter } from "next/router";
import React, { useState } from "react";
type Props = {
  children?: React.ReactNode;
  showModal: boolean;
  showModalButton: boolean;
  handelModalState: Function;
};

function BasicLayout({
  children,
  showModal,
  handelModalState,
  showModalButton = false,
}: Props) {
  const [toggle, setToggle] = useState(false);
  const { width } = useWindowSize();
  const router = useRouter();

  return (
    <div className="w-screen">
      <SideNav toggle={toggle} setToggle={setToggle} />
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
  );
}

export default BasicLayout;
