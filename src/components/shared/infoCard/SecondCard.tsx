import React from "react";

import useOnClickOutside from "hooks/useOnClickOutside";

import doctorAvatar from "assets/doc2.jpg";
import Email from "assets/EmailIcon.svg";
import Telephone from "assets/telephone.svg";
import EditIcon from "assets/pen-to-square-solid.svg"
import Trash from "assets/trash-solid.svg"

export default function SecondCard({ data, openModal, openConfirmModal }: any) {

  const [cardMenu, setCardMenu] = React.useState(false);
  let ref = React.useRef(null);
  useOnClickOutside(ref, () => cardMenu && openCardMenu());

  const openCardMenu = () => {
    setCardMenu(!cardMenu);
  };

  return (
    data && (
      <div
        className="overflow-hidden h-[600px] transform transition-300 relative w-full bg-layout-secondary shadow-lg rounded-3xl flex flex-col justify-end"
        ref={ref}
        key={data.id}
      >

 

        <div className="h-[60%] bg-white relative ">

          <div className="h-[100px] w-[100px] bg-white rounded-full flex justify-center items-center absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0  ">
            <img src={doctorAvatar.src} className="h-[100px] w-[100px] rounded-full" />
          </div>

          <div className="-z-10 h-[150px] w-[230px] flex justify-center items-center absolute left-1/2 -translate-x-1/2 -translate-y-1/2 -top-[5px]  ">
            <img src="https://minimals.cc/assets/shape_avatar.svg" className="h-full w-full rounded-full" />
          </div>

          <div className="mt-[4.25rem] text-center">
            <p className="font-bold text-2xl">{data.name}</p>
            {data.roles.map((role: any, index: any) => (
              <span key={index}>

                {role}{" "}
                {data.roles.length - 1 !== index && (
                  <span className="mx-1 font-bold text-lg">|</span>
                )}
              </span>
            ))}

            <div className="items-center w-full border-t-2 p-4 self-end absolute bottom-0 left-0">
              <div className="info text-start">
                <h2 className="text-sm">
                  <Email className="w-[20px] h-[20px] inline-block mr-1 fill-secondary" />
                  {data.email}
                </h2>
                <h2 className="text-sm mt-1">
                  <Telephone className="w-[20px] h-[20px] inline-block mr-1 fill-secondary " />
                  {data.phone}
                </h2>
              </div>

              <div className="icons flex gap-8 absolute right-[16px] top-1/2 -translate-y-1/2">
                <Trash className="w-[20px] h-[20px] cursor-pointer fill-secondary hover:fill-primary" onClick={()=>{
                      openConfirmModal(true);
                    
                }} />
                <EditIcon className="w-[20px] h-[20px] cursor-pointer fill-secondary hover:fill-primary" onClick={()=>{
                      openModal(true);
                    
                }} />

              </div>

            </div>
          </div>

        </div>
        {/* card footer */}
        {/* <div className="flex justify-between items-center w-full p-4 self-end">
          <div className="info">
            <h2 className="text-sm">
              <Email className="w-[20px] h-[20px] inline-block mr-1" />
              {data.email}
            </h2>
            <h2 className="text-sm mt-1">
              <Telephone className="w-[20px] h-[20px] inline-block mr-1" />
              {data.phone}
            </h2>
          </div>
        </div> */}
      </div>
    )
  );
}
