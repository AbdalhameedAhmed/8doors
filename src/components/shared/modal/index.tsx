import { useEffect, useRef, useState } from "react";
import useOnClickOutside from "hooks/useOnClickOutside";
import MainAnimation from "../mainAnimation";

export default function Modal({
  openModal,
  changeModalState,
  title,
  children,
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
        className={`justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed  flex ${layout ? "fixed bg-cyan-800/50 flex" : "hidden"
          }  inset-0 z-50 outline-none focus:outline-none`}
      >
        <div
          className={`relative  w-[85%] my-6 mx-auto max-w-3xl transition-all duration-[500ms] ease-in-out`}
        >
          {/*content*/}
          <MainAnimation startanimation={openModal} className="">
            <div
              className={`ModalCard border-0 bg-secondary text-secondary rounded-lg shadow-lg relative relative w-full flex flex-col transition-all ease-in-out duration-[200ms] w-full outline-none focus:outline-none`}
              ref={ref}
            >
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold text-primary">{title}</h3>
              </div>
              {/*body*/}
              {children}
            </div>
          </MainAnimation>
        </div>
      </div>
    </>
  );
}
