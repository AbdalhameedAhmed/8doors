import React, { ChangeEvent, Dispatch, SetStateAction } from "react"

import styles from "./dashboard.module.css"
import useWindowSize from "hooks/useWindowSize"

import NoUser from "assets/dashboard/blank-profile-picture-973460_1280.webp"
import UploadIcon from "assets/dashboard/upload-solid.svg"

import classNames from "classnames"
import { useProfilePicMutation } from "redux/services/patient/profilePic"


type sideNavTypes = {
  items: { title: string, icon: React.ReactNode }[]
  userInfo: { imageUrl: string | undefined, name: string, moreInfo: string, location?: string }
  direction: "ltr" | "rtl"
  setActiveItem: Dispatch<SetStateAction<number>>
  activeItem: number,
  refetchProfileData: () => void
}
export default function SideNav({ items, userInfo, direction, activeItem, setActiveItem, refetchProfileData }: sideNavTypes) {

  const [prevScrollPosition, setPrevScrollPosition] = React.useState(0);
  const [scrollDirection, changeScrollDirection] = React.useState("down")
  const { width } = useWindowSize()
  const [postProfilePic] = useProfilePicMutation()


  const handelLiClick = (index: number) => {
    setActiveItem(index)
  }

  const convertImageToUrl = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (!file) {
      return;
    }
    const formData = new FormData()
    formData.append("file", file)
    postProfilePic(formData).unwrap().then((res) => {
      refetchProfileData()
    })
  }

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
    <div className={classNames(`col-md-5 col-lg-4 col-xl-3 ${width > 767 && "!sticky"}  top-[1.5rem] transition-all duration-300`, { "": scrollDirection === "down" })} style={{ overflow: "visible", boxSizing: "border-box", minHeight: "1px" }}>
      <div style={{ paddingTop: "0px", paddingBottom: "1px", position: "static", transform: "none", top: " 0px", left: "30px" }}><div className={`${styles.profileSidebar}`}>
        <div className={`${styles.widgetProfile}`}>
          <div className={`${styles.profileInfoWidget}`}>

            <div className={`${styles.bookingDocImg}`}>
              <img src={userInfo.imageUrl ? userInfo.imageUrl : NoUser.src} alt="User Image" />
              <div className={`${styles.uploadPhoto} cursor-pointer`}>
                <input type="file" name="profilePic" accept=".jpg, .jpeg, .png" onChange={convertImageToUrl} className="cursor-pointer" />
                <span>
                  <UploadIcon />
                  Upload</span>
              </div>
            </div>


            <div className={`${styles.profileDetInfo}`}>
              {
                userInfo.name && <h3>{userInfo.name}</h3>
              }
              <div className={`${styles.patientDetails}`}>
                {
                  userInfo.moreInfo && <h5 className="mb-0">{userInfo.moreInfo}</h5>
                }
              </div>
              <h5 className="mb-0">{userInfo.location}</h5>
            </div>
          </div>
        </div>
        <div className="dashboard-widget">
          <nav className={`${styles.dashboardMenu}`}>
            <ul>
              {
                items.map((item, index) => (
                  <li key={index} onClick={() => { handelLiClick(index) }} className={`${index === activeItem && styles.active}`}>
                    <p>
                      {
                        item.icon
                      }
                      <span className={`${direction === "ltr" ? "ml-[10px]" : "mr-[10px]"}`}>{item.title}</span>
                    </p>
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