import React from "react"
import CustomMenu from "components/shared/customMenu"
import { useRouter } from "next/router"

import classNames from "classnames"


import UserImage from "assets/avatar_default.jpg"
import { toSubDomain } from "utiles"

export default function UserIcon() {

  let [layout, showLayout] = React.useState(false)
  const router = useRouter()

  const icon = (
    <div className={classNames("relative w-[40px] h-[40px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-transparent", { "before:bg-[rgba(22,28,36,0.8)]": layout })}>
      <img src={UserImage.src} alt="Your account image" className="w-[40px] h-[40px] rounded-full" />
    </div>
  )


  const changeLayout = () => {
    showLayout(!layout)

  }
  const clickOutSide = () => {
    showLayout(false)
  }

  const goto = (url: string) => {
    router.push(url)
  }

  return (
    <CustomMenu icon={icon} iconContainer="!block hover:!bg-transparent" whenMenuOpened={changeLayout} containerStyle="!p-2 w-[200px]"  clickOutSide={clickOutSide} >
      <>
        <div className="px-3 py-2 text-custom">
          <p className="font-[600] text-primary">Username</p>
          <p className="text-[rgb(99,115,129)] text-secondary">Email</p>

        </div>
        <ul>
          <div className="py-2 border-t-[1px] border-b-[1px] border-dashed border-[rgba(145,158,171,0.24)]">
            <li className="cursor-pointer p-2 w-full hover:bg-[rgba(145,158,171,0.08)] text-custom rounded-md font-[400] ">
              <p className="text-primary">

                Home
              </p>
            </li>
            <li className="cursor-pointer p-2 w-full hover:bg-[rgba(145,158,171,0.08)] text-custom rounded-md font-[400] ">
              <p className="text-primary">

                Profile
              </p>
            </li>
            <li className="cursor-pointer p-2 w-full hover:bg-[rgba(145,158,171,0.08)] text-custom rounded-md font-[400] ">
              <p className="text-primary">

                Settings
              </p>
            </li>

          </div>
          <div className="pt-2">
            <li className="cursor-pointer p-2 w-full hover:bg-[rgba(145,158,171,0.08)] text-custom rounded-md font-[400]"
              onClick={() => {
                goto("/dashboard")
              }}
            >
              <p className="text-primary">

                Go to dashboard
              </p>
            </li>
            <li className="cursor-pointer p-2 w-full hover:bg-[rgba(145,158,171,0.08)] text-custom rounded-md font-[400]"
              onClick={() => {
                goto(toSubDomain("",""))
              }}
            >
              <p className="text-primary">

                Logout
              </p>
            </li>
          </div>

        </ul>
      </>

    </CustomMenu>
  )
}


