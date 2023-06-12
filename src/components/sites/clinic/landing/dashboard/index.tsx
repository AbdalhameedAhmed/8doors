import React, { Dispatch, SetStateAction } from "react"
import SideNav from "./SideNav"

import { ImageProps } from "theme-ui"

type dashboardTypes = {
  items: { title: string, icon: React.ReactNode, component?: React.ReactNode }[],
  userInfo: { imageUrl: string | undefined, name: string, moreInfo: string, location?: string }
  direction: "rtl" | "ltr"
  activeItem: number
  setActiveItem: Dispatch<SetStateAction<number>>,
  refetchProfileData: () => void
}
export default function DashboardContent({ items, userInfo, direction, setActiveItem, activeItem, refetchProfileData }: dashboardTypes) {


  return (
    <div className="content py-[30px]" style={{ transform: "none" }}>
      <div className="container-fluid" style={{ transform: "none" }}>
        <div className="row" style={{ transform: "none" }}>
          <SideNav direction={direction} refetchProfileData={refetchProfileData} items={items} userInfo={userInfo} activeItem={activeItem} setActiveItem={setActiveItem} />
          <div className="col-md-7 col-lg-8 col-xl-9" style={{ display: "flex", alignItems: "center" }} >
            {items[activeItem].component && items[activeItem].component}
          </div>
        </div>
      </div>
    </div>
  )
}