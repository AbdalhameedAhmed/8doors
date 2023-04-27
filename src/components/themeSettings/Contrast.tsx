import React from "react"

import Contrast from "assets/contrast-outline-svgrepo-com.svg"
import NormalContrast from "assets/contrast-svgrepo-com (1).svg"

export default function ContrastSection () {


  return (
    <div className="flex flex-col gap-3 mb-5">
    <p className="text-[0.75rem] font-[600] text-secondary">Contrast</p>
    <div className="flex justify-between items-center w-full">
      <button className="w-[106px] h-[70px] border-[1px] border-[rgba(145,158,171,0.24)] rounded-xl flex items-center justify-center">
        <NormalContrast className="w-[20px] h-[20px] [&_path]:fill-primary" />
      </button>

      <button className="w-[106px] h-[70px] border-[1px] border-[rgba(145,158,171,0.24)] rounded-xl flex items-center justify-center">
        <Contrast className="w-[20px] h-[20px] fill-secondary" />
      </button>
    </div>
  </div>
  )
}