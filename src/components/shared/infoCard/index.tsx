import React from "react"
import MenuIcon from "../../../assets/menu-icon.svg"
import MainAnimation from "components/shared/mainAnimation"

export default function InfoCard({ data, openModal, openConfirmModal }: any) {
    const [cardMenu, setCardMenu] = React.useState(false);

    const openCardMenu = () => {
        setCardMenu(!cardMenu)
    }

    return (
        data && (
            <div className="info-card overflow-hidden relative w-full h-96 bg-secondary flex flex-wrap justify-center shadow-2xl rounded-xl">
                {/* card menu */}
                <MainAnimation startanimation={cardMenu} className="menu absolute left-0 w-full h-full">
                    <div className="lay absolute top-0 left-0 w-full h-full  bg-slate-400/75 blur-xl rounded-xl"></div>
                    <div className="flex flex-col gap-8 justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <button className="modalBtn bg-primary border-[1px] py-[5px] text-white px-[20px] border-black rounded-lg overflow-visible inline-block touch-manipulation" onClick={() => { openCardMenu(); openModal() }}>Edit</button>
                        <button className="modalBtn bg-primary border-[1px] py-[5px] text-white px-[20px] border-black rounded-lg overflow-visible inline-block touch-manipulation" onClick={() => { openCardMenu(); openConfirmModal() }}>Delete</button>
                    </div>
                </MainAnimation>

                {/* card header */}
                <div className="flex justify-between items-center w-full p-4 self-start">
                    <div className="info">
                        <h2 className="text-red-500">{data.name}</h2>
                        <h2 className="text-red-500">{data.role.join("/")}</h2>
                    </div>
                    <button onClick={() => { openCardMenu() }}>
                        <MenuIcon className="w-[30px] h-[30px]" />
                    </button>
                </div>
                {/* card body */}

                {/* card footer */}
                <div className="flex justify-between items-center w-full p-4 self-end">
                    <div className="info">
                        <h2 className="text-red-500">{data.email}</h2>
                        <h2 className="text-red-500">{data.phone}</h2>
                    </div>
                </div>
            </div>
        )
    )
}