import { useEffect, useRef, useState } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import MainAnimation from "../mainAnimation";
import DangerIcon from "assets/danger.svg";
import CustomBtn from "components/shared/button/CustomBtn";
export default function ConfirmationModal({
  openModal,
  changeModalState,
}: any) {
  let [layout, setLayout] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    openModal && setLayout(true);
  }, [openModal]);

  function closeModal() {
    changeModalState(false);
    setTimeout(() => {
      setLayout(false);
    }, 300);
  }

  useOnClickOutside(ref, () => openModal && closeModal());

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
              className={`ModalCard border-0 bg-secondary text-secondary p-12 pt-8 pb-16 rounded-2xl shadow-lg relative relative flex flex-col justify-center items-center transition-all ease-in-out duration-[200ms] w-full outline-none focus:outline-none`}
              ref={ref}
            >
              <div className="icon">
                <DangerIcon className="w-32 h-32" />
              </div>
              <h1 className="text-4xl bold mt-8 font-semibold">
                Are You Sure ?
              </h1>
              <p className="text-xl bold mt-8">
                Do You really want to delete this card?
              </p>
              <p className="text-xl bold mt-2">This process cannot be undone</p>
              <div className="btns flex justify-center items-center gap-8 mt-8">
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
