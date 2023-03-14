import React from "react";
import MenuIcon from "../../../assets/menu-icon.svg";
import MainAnimation from "components/shared/mainAnimation";
import doctorAvatar from "assets/doc2.jpg";
import Email from "assets/EmailIcon.svg";
import Telephone from "assets/telephone.svg";
import useOnClickOutside from "hooks/useOnClickOutside";
export default function InfoCard({ data, openModal, openConfirmModal }: any) {
  const [cardMenu, setCardMenu] = React.useState(false);
  let ref = React.useRef(null);

  useOnClickOutside(ref, () => cardMenu && openCardMenu());
  const openCardMenu = () => {
    setCardMenu(!cardMenu);
  };

  return (
    data && (
      <div
        className="info-card overflow-hidden transform transition-300 relative w-full bg-secondary grid grid-rows-5 gap-0 shadow-lg rounded-xl"
        ref={ref}
      >
        {/* card menu */}
        <MainAnimation
          startanimation={cardMenu}
          className="menu absolute left-0 w-full h-full"
        >
          <div className="lay absolute top-0 left-0 w-full h-full  bg-cyan-800/50 rounded-xl"></div>
          <div className="flex flex-col gap-8 justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <button
              className="modalBtn bg-primary border-[1px] py-[5px] text-secondary px-[20px] border-black rounded-lg overflow-visible inline-block touch-manipulation"
              onClick={() => {
                openCardMenu();
                openModal(true);
              }}
            >
              Edit
            </button>
            <button
              className="modalBtn bg-primary border-[1px] py-[5px] text-secondary px-[20px] border-black rounded-lg overflow-visible inline-block touch-manipulation"
              onClick={() => {
                openCardMenu();
                openConfirmModal(true);
              }}
            >
              Delete
            </button>
          </div>
        </MainAnimation>

        {/* card header */}
        <div className="flex justify-between items-center w-full p-4 self-start">
          <div className="info">
            <h2 className="font-bold text-primary">{data.name}</h2>
            <h2 className="text-sm">
              {data.roles.map((role: any, index: any) => (
                <>
                  {role}{" "}
                  {data.roles.length - 1 !== index && (
                    <span className="mx-1 font-bold text-lg">|</span>
                  )}
                </>
              ))}
            </h2>
          </div>
          <button
            onClick={() => {
              openCardMenu();
            }}
          >
            <MenuIcon className="w-[30px] h-[30px]" />
          </button>
        </div>
        {/* card body */}
        <div className="h-full w-full row-start-2 row-end-5">
          <img src={doctorAvatar.src} className="h-full max-h-full w-full" />
        </div>
        {/* card footer */}
        <div className="flex justify-between items-center w-full p-4 self-end">
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
        </div>
      </div>
    )
  );
}
