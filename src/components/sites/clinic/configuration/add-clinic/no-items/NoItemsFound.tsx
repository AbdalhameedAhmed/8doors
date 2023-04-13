import React from "react"
import CustomBtn from "components/shared/button/CustomBtn"
type props = {
  onClick?:()=>void
}
export default function NoItemsFound ({onClick}:props) {
  return (
    <div className="flex min-h-[400px] pb-5 justify-center gap-5 flex-col items-center text-3xl xs:text-2xl ">
    <h1 className="text-center">You don&apos;t have any clinics</h1>
    <div className="mb-[5px] mr-[4px]">

    <CustomBtn className="!bg-transparent text-xl xs:text-lg xs:px-[15px] !shadow-[4px_4px_0_0_rgba(241,241,241,1),4px_4px_0_1px_rgba(0,0,0,1)] active:!shadow-[2px_2px_0_0_rgba(241,241,241,1),2px_2px_0_1px_rgba(0,0,0,1)]" onClick={onClick}>Add one now</CustomBtn>
    </div>
    </div>
  )
}