import React from "react"
import CustomMenu from "components/shared/customMenu"
import { useRouter } from "next/router"

import classNames from "classnames"


import { toSubDomain } from "utiles"
import { isTemplateMiddle } from "typescript"

type UserIconTypes = {
  userImgSrc: string
  userInfo: { username: string, email: string }
  firstMenuItems?: { name: string, url?: string, onClick?: () => void }[]
  lastMenuItems?: { name: string, url?: string, subDomain?: { subDomain: string, path: string }, onClick?: () => void }[]
}
export default function UserIcon({ userImgSrc, userInfo, firstMenuItems, lastMenuItems }: UserIconTypes) {

  let [layout, showLayout] = React.useState(false)
  const router = useRouter()

  const icon = (
    <div className={classNames("relative w-[40px] h-[40px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-transparent", { "before:bg-[rgba(22,28,36,0.8)]": layout })}>
      <img src={userImgSrc} alt="Your account image" className="w-[40px] h-[40px] rounded-full" />
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
    <CustomMenu icon={icon} iconContainer="!block hover:!bg-transparent" whenMenuOpened={changeLayout} containerStyle="!p-2 w-[200px]" clickOutSide={clickOutSide} >
      <>
        <div className="px-3 py-2 text-custom">
          <p className="font-[600] text-primary">{userInfo.username}</p>
          <p className="text-[rgb(99,115,129)] text-secondary">{userInfo.email}</p>

        </div>
        <ul>
          {
            firstMenuItems && (

              <div className="py-2 border-t-[1px]. border-b-[1px] border-dashed border-[rgba(145,158,171,0.24)]">
                {
                  firstMenuItems.map((item, ind) => (
                    <li key={ind} className="cursor-pointer p-2 w-full hover:bg-[rgba(145,158,171,0.08)] text-custom rounded-md font-[400] ">
                      <p className="text-primary">
                        {item.name}
                      </p>
                    </li>

                  ))
                }

              </div>
            )
          }
          {
            lastMenuItems && (

              <div className="pt-2">
                {
                  lastMenuItems.map((item, ind) => (
                    <li key={ind} className="cursor-pointer p-2 w-full hover:bg-[rgba(145,158,171,0.08)] text-custom rounded-md font-[400]"
                      onClick={() => {
                        item.onClick && item.onClick()
                        if (item.subDomain) {
                          goto(toSubDomain("", ""))

                        } else if (item.url) {
                          goto(item.url)
                        }
                      }}
                    >
                      <p className="text-primary">

                        {item.name}
                      </p>
                    </li>

                  ))
                }
              </div>

            )
          }

        </ul>
      </>

    </CustomMenu>
  )
}


