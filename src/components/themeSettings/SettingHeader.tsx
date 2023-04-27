import React from "react"

import Reset from "assets/reset.svg"
import Close from "assets/close.svg"

type SettingHeaderTypes = {
  closeMenu:()=>void
}

export default function SettingHeader ({closeMenu}:SettingHeaderTypes) {



  return (
    <div className="flex justify-between items-center p-4 border-b-[1px] border-main-border border-dashed">
    <p className="text-primary">Settings</p>
    <div className="flex items-center justify-center gap-2">
      <button className="w-[30px] h-[30px] flex justify-center items-center rounded-full hover:bg-[rgba(99,115,129,0.08)]">

        <Reset className='w-[15px] h-[15px] fill-secondary' />
      </button>
      <button className="w-[30px] h-[30px] flex justify-center items-center rounded-full hover:bg-[rgba(99,115,129,0.08)]" onClick={() => { closeMenu() }}>

        <Close className='w-[15px] h-[15px] fill-secondary' />
      </button>
    </div>
  </div>

  )
}