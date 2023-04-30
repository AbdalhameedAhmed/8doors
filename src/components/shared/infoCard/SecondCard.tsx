import React from "react";

import useOnClickOutside from "hooks/useOnClickOutside";

import EditIcon from "assets/pen-to-square-solid.svg"
import Trash from "assets/trash-solid.svg"
import Facebook from "assets/facebook-176-svgrepo-com.svg"
import Instagram from "assets/square-instagram.svg"
import Twitter from "assets/twitter.svg"
import LinkedIn from "assets/linkedin-in.svg"

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
        className="overflow-hidden transform transition-300 relative w-full  shadow-lg rounded-3xl group flex flex-col justify-end"
        ref={ref}
        key={data.id}
      >

        <div className="h-[56%] relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[rgba(22,28,36,0.64)] -z-10">
          <img src={data.img} alt="" className="h-full w-full" />

          <div className="icons absolute flex items-center right-[20px] top-[20px]">
            <button className="w-[34px] h-[34px] hover:bg-[rgb(224,126,126,67%)] flex justify-center items-center rounded-full"
              onClick={() => {
                openConfirmModal(true);

              }}
            >

              <Trash className="w-[17px] h-[17px] cursor-pointer fill-red-400 hidden group-hover:block" />
            </button>

            <button className="w-[34px] mx-1  h-[34px] hover:bg-[#70e39a7d] flex justify-center items-center rounded-full"
              onClick={() => {
                openModal(true);

              }}
            >
              <EditIcon className="w-[17px] h-[17px] cursor-pointer fill-green-400 hidden group-hover:block" />
            </button>

          </div>

        </div>

        <div className="h-[55%] bg-secondary relative ">

          <div className="rounded-full flex justify-center items-center absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0  ">
            <img src={data.avatar} className="h-[70px] w-[70px] rounded-full" />
          </div>

          <span className="avatar-shape -z-10  h-[70px] w-[160px] bg-secondary absolute left-1/2 -translate-x-1/2 -top-[40px]  ">
          </span>

          <div className="mt-12 text-center">
            <p className="font-bold text-md mb-1 mt-[48px]">{data.name}</p>
            {data.roles.map((role: any, index: any) => (
              <span key={index} className="text-sm text-[rgb(99,115,129)] text-[0.875]">

                {role}{" "}
                {data.roles.length - 1 !== index && (
                  <span className="mx-1 font-bold text-md text-[rgb(99,115,129)]">|</span>
                )}
              </span>
            ))}
            <div className="w-full flex justify-center items-center mt-2 mb-[24px]">
              <button className="w-[34px] mx-1  h-[34px] hover:bg-[rgba(24,119,242,0.08)] flex justify-center items-center rounded-full">

                <Facebook className="w-[17px] h-[17px]" />
              </button>
              <button className="w-[34px] mx-1 h-[34px] hover:bg-[rgba(224,45,105,0.08)] flex justify-center items-center rounded-full">

                <Instagram className="w-[17px] h-[17px] fill-[rgb(224,45,105)]" />
              </button>

              <button className="w-[34px] mx-1 h-[34px] hover:bg-[rgba(0,126,187,0.08)] flex justify-center items-center rounded-full">

                <LinkedIn className="w-[17px] h-[17px] fill-[rgb(0,126,187)]" />
              </button>

              <button className="w-[34px] mx-1 h-[34px] hover:bg-[rgba(0,170,236,0.08)] flex justify-center items-center rounded-full">
                <Twitter className="w-[17px] h-[17px] fill-[rgb(0,170,236)]" />

              </button>

            </div>
            <div className="items-center w-full border-t-[1px] border-[rgba(145,158,171,0.24)] border-dashed py-6 self-end ">
              <div className="info text-center">
                <h2 className="text bold text-[1rem] font-[700]">
                  {/* <Email className="w-[20px] h-[20px] inline-block mr-1 fill-secondary" /> */}
                  {data.email}
                </h2>
                <h2 className="mt-2 text-[1rem] font-[700]">
                  {/* <Telephone className="w-[20px] h-[20px] inline-block mr-1 fill-secondary " /> */}
                  {data.phone}
                </h2>
              </div>


            </div>
          </div>

        </div>
      </div>
    )
  );
}
