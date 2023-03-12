import React, { useEffect } from "react"
import MenuIcon from "../../../assets/menu-icon.svg"
import MainAnimation from "components/shared/mainAnimation"
import classNames from "classnames";

export default function InfoCard({ data, openModal, openConfirmModal, selectedCard, changeSelectedCard, index }: any) {
    const [cardMenu, setCardMenu] = React.useState(false);

    const openCardMenu = () => {
        setCardMenu(!cardMenu)
    }


    useEffect(() => {
        console.log(selectedCard)
    }, [selectedCard])
    return (
        data && (
            <div style={{ zIndex: index == selectedCard ? 1000 : 0 }}
            >
                <div
                    className={
                        classNames("info-card overflow-hidden relative w-full h-96 bg-secondary flex flex-wrap justify-center shadow-2xl rounded-xl")
                    }>


                    <div className="flex justify-between items-center w-full p-4 self-start">
                        <div className="info">
                            <h2 className="text-red-500">{data.name}</h2>
                            <h2 className="text-red-500">{data.role.join("/")}</h2>
                        </div>
                        <button onClick={() => { openCardMenu() }}>
                            <MenuIcon className="w-[30px] h-[30px]" onClick={() => changeSelectedCard(index)} />
                        </button>
                    </div>

                    <div className="flex justify-between items-center w-full p-4 self-end">
                        <div className="info">
                            <h2 className="text-red-500">{data.email}</h2>
                            <h2 className="text-red-500">{data.phone}</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}