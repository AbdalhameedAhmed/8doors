import React from "react"
import SideNav from "./SideNav"

import { ImageProps } from "theme-ui"

type dashboardTypes = {
  items: { title: string, icon: React.ReactNode }[],
  userInfo: { image: ImageProps, name: string, moreInfo: string, location?: string }
  direction: "rtl" | "ltr"
}
export default function DashboardContainer({ items, userInfo, direction }: dashboardTypes) {


  return (
    <div className="content py-[30px]" style={{ transform: "none" }}>
      <div className="container-fluid" style={{ transform: "none" }}>
        <div className="row" style={{ transform: "none" }}>
          <SideNav direction={direction} items={items} userInfo={userInfo} />
          <div className="min-h-[1000px]" >

          </div>
        </div>
      </div>
    </div>
  )
}