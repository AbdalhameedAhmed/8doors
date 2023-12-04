import { useEffect, useRef, useState } from "react";

import MainAnimation from "components/shared/mainAnimation";
import useOnClickOutside from "hooks/useOnClickOutside";
import CustomBtn from "components/shared/button/CustomBtn";

import DangerIcon from "assets/danger.svg";
import { useQueryClient } from "@tanstack/react-query";


type confirmationModalTypes = {
  openModal: boolean
  changeModalState: Function
  warningMessage: string;
  deleteFunction?: Function;
}
export default function ConfirmationModal({
  openModal,
  changeModalState,
  deleteFunction = () => { },
  warningMessage
}: confirmationModalTypes) {

  let [layout, setLayout] = useState(false);
  const ref = useRef(null);
  const queryClient = useQueryClient()
  useOnClickOutside(ref, () => openModal && closeModal());


  function closeModal() {
    changeModalState(false);
    setTimeout(() => {
      setLayout(false);
      queryClient.setQueryData(["activeClinic"], null)
    }, 300);
  }


  useEffect(() => {
    openModal && setLayout(true);
  }, [openModal]);

  return (
    <>
      <div
        className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed  flex ${layout ? "fixed bg-cyan-800/50 flex" : "hidden"
          }  inset-0 z-50 outline-none focus:outline-none`}
      >
        <div className={`relative  my-6 mx-auto max-w-3xl`}>
          {/*content*/}
          <MainAnimation startanimation={openModal}>
            <div
              className={`ModalCard border-0 bg-secondary text-secondary p-12 py-8 rounded-2xl shadow-lg relative relative flex flex-col justify-evenly items-center transition-all ease-in-out duration-[200ms] sm:w-[500px] w-[700px] h-[450px] outline-none focus:outline-none`}
              ref={ref}
            >
              <div className="icon">
                <DangerIcon className="w-24 h-24" />
              </div>
              <div className="text-center">
                <h1 className="text-3xl bold mb-4 font-semibold">
                  Are You Sure ?
                </h1>
                <p className="text-xl bold">
                  {warningMessage}
                </p>
              </div>
              <div className="btns flex justify-center items-center gap-8">
                <CustomBtn
                  type="submit"
                  onClick={() => {
                    closeModal();
                  }}
                  className="rounded-lg font-bold text-lg"
                >
                  Cancel
                </CustomBtn>
                <CustomBtn
                  type="submit"
                  onClick={() => {
                    deleteFunction();
                    closeModal();
                  }}
                  className="rounded-lg font-bold text-lg bg-red-500 !shadow-[4px_4px_0_0_rgba(239,68,68,1),4px_4px_0_1px_rgba(0,0,0,1)] active:!shadow-[2px_2px_0_0_rgba(239,68,68,1),2px_2px_0_1px_rgba(0,0,0,1)]"
                >
                  Delete
                </CustomBtn>
              </div>
            </div>
          </MainAnimation>
        </div>
      </div>
    </>
  );
}
