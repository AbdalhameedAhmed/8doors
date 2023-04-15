import { useEffect, useRef, useState } from "react";
import useOnClickOutside from "hooks/useOnClickOutside";
import MainAnimation from "components/shared/mainAnimation";
import {modaltypes} from "types/modalTypes"
export default function Modal({
  openModal,
  changeModalState,
  title,
  children,
  onModalClose = ()=>{}
}: modaltypes) {
  let [layout, setLayout] = useState(false);
  let [resetForm, setResetForm] = useState(false)
  const ref = useRef(null);

  function closeModal() {
    changeModalState(false);
    setTimeout(() => {
      onModalClose()
      setLayout(false);
      setResetForm(false)
    }, 300);
  }
  useEffect(() => {
    if (openModal) {
      setLayout(true)
      setResetForm(true)
    } else {
      closeModal()
    }
  }, [openModal]);


  useOnClickOutside(ref, () => openModal && closeModal());

  return (
    <>
      <div
        className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed  flex ${layout ? "fixed bg-cyan-800/50 flex" : "hidden"
          }  inset-0 z-50 outline-none focus:outline-none`}
      >
        <div
          className={`relative  w-[85%] my-6 mx-auto max-w-3xl transition-all duration-[500ms] ease-in-out`}
        >
          {/*content*/}
          <MainAnimation startanimation={openModal}>
            <div
              className={`ModalCard border-0 bg-secondary text-secondary shadow-lg relative relative w-full flex flex-col transition-all ease-in-out duration-[200ms] w-full outline-none focus:outline-none`}
              ref={ref}
            >
              {/*header*/}
              <div className="flex items-start justify-between p-6 xs:p-4 pb-0  rounded-t">
                <h3 className="xs:text-2xl text-3xl font-semibold text-primary ">{title}</h3>
              </div>
              {/*body*/}
              {resetForm && children}
            </div>
          </MainAnimation>
        </div>
      </div>
    </>
  );
}
