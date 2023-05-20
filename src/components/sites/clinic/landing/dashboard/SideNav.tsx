import React from "react"

import styles from "./dashboard.module.css"

import DoctorImage from "assets/doctor-thumb-02.jpg"

import classNames from "classnames"
import { ImageProps } from "theme-ui"

type sideNavTypes = {
  items: { title: string, icon: React.ReactNode }[]
  userInfo: { image: ImageProps, name: string, moreInfo: string, location?: string }
  direction: "ltr" | "rtl"
}
export default function SideNav({ items, userInfo, direction }: sideNavTypes) {

  const [prevScrollPosition, setPrevScrollPosition] = React.useState(0);
  const [scrollDirection, changeScrollDirection] = React.useState("down")



  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      const scrollDirection = currentScrollPosition > prevScrollPosition ? 'down' : 'up';
      setPrevScrollPosition(currentScrollPosition);
      changeScrollDirection(scrollDirection)
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPosition]);


  return (
    <div className={classNames("col-md-5 col-lg-4 col-xl-3 !sticky top-[1.5rem] transition-all duration-300", { "": scrollDirection === "down" })} style={{ overflow: "visible", boxSizing: "border-box", minHeight: "1px" }}>
      <div style={{ paddingTop: "0px", paddingBottom: "1px", position: "static", transform: "none", top: " 0px", left: "30px" }}><div className={`${styles.profileSidebar}`}>
        <div className={`${styles.widgetProfile}`}>
          <div className={`${styles.profileInfoWidget}`}>
            <a href="#" className={`${styles.bookingDocImg}`}>
              <img src={userInfo.image.src} alt="User Image" />
            </a>
            <div className={`${styles.profileDetInfo}`}>
              <h3>{userInfo.name}</h3>
              <div className={`${styles.patientDetails}`}>
                <h5 className="mb-0">{userInfo.moreInfo}</h5>
                <h5 className="mb-0">{userInfo.location}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-widget">
          <nav className={`${styles.dashboardMenu}`}>
            <ul>
              {
                items.map((item, index) => (
                  <li key={index} className={`${index === 0 && styles.active}`}>
                    <a href="doctor-dashboard.html">
                      {
                        item.icon
                      }
                      <span className={`${direction === "ltr" ? "ml-[10px]" : "mr-[10px]"}`}>{item.title}</span>
                    </a>
                  </li>
                ))
              }

            </ul>
          </nav>
        </div>
      </div>
        <div className="resize-sensor" style={{ position: "absolute", inset: "0px", overflow: "hidden", zIndex: "-1", visibility: "hidden" }}>
          <div className="resize-sensor-expand" style={{ position: "absolute", left: "0", top: "0", right: "0", bottom: "0", overflow: "hidden", zIndex: "-1", visibility: "hidden" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", transition: "all 0s ease 0s", width: "1378px", height: "958px" }}>
            </div>
          </div>
          <div className="resize-sensor-shrink" style={{ position: "absolute", left: "0", top: "0", right: "0", bottom: "0", overflow: "hidden", zIndex: "-1", visibility: "hidden" }}>
            <div style={{ position: "absolute", left: "0", top: "0", transition: " 0s", width: "200%", height: "200%" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}