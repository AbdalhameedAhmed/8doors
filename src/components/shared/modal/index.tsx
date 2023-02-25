import { useEffect, useState } from "react";

export default function Modal({ openModal, changeModalState, title, children }: any) {
  let modaldiv = document.querySelectorAll(".ModalCard")
  useEffect(() => {
    modaldiv.forEach((mod) => {
      if (openModal) {
        setTimeout(() => mod?.classList.add("opacity-100", "translate-y-0"), 100)
      }

    })


  }, [openModal])
  // const [showModal, setShowModal] = useState(openModal);

  // console.log("modal now is", showModal);

  // useEffect(() => {
  //   setShowModal(openModal)

  // }, [openModal])
  return (
    <>
      <div
        className={`justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed  flex ${openModal ? "fixed bg-cyan-800/50 flex" : "hidden"}  inset-0 z-50 outline-none focus:outline-none`}
      >
        <div className={`relative  "w-auto" my-6 mx-auto max-w-3xl transition-all duration-[500ms] ease-in-out`}>
          {/*content*/}
          <div className={`ModalCard border-0 rounded-lg shadow-lg relative relative w-[400px] sm:w-[450px] md:w-[550px] lg:w-[700px] xl:w-[700px] -translate-y-full transfor opacity-0 flex flex-col transition-all ease-in-out duration-[200ms] w-full bg-white outline-none focus:outline-none`}>
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                {title}
              </h3>
            </div>
            {/*body*/}
            {children}
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="mt-5 w-full rounded-lg text-white p-4 bg-sky-500/100"
                type="button"
                onClick={() => {
                  // setShowModal(false)
                  modaldiv.forEach(mod => {
                    mod?.classList.remove("opacity-100", "translate-y-0")
                  })
                  setTimeout(() => {
                    changeModalState(false)
                  }, 300)
                }
                }
              >
                Submit
                  </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={` hidden inset-0 z-40 bg-black transition duration-[5000ms] ease-in-out`}></div> */}
    </>

  );
}




