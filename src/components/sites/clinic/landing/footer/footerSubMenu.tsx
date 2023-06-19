
import styles from "./footer.module.css"
import DoubleRightArrow from "assets/angles-right-solid.svg"
import { footerSubMenuTypes } from "types/landingTypes/footerTypes"

export default function FooterSubMenu({ direction, items,menuTitle }: footerSubMenuTypes) {


  return (
    <div className="col-lg-3 col-md-6">

      <div className={`${styles.footerWidget} ${styles.footerMenu}`}>
        <h2 className={`${styles.footerTitle}`}>{menuTitle}</h2>
        <ul>

          {
            items.map((itemInfo, index) => {



              return (
                <li className="flex items-center justify-start" key={index}>
                  <DoubleRightArrow className={`w-[15px] ${direction === "rtl" ? "m-2 rotate-180" : "mr-2"} fill-white`} />
                  <a href="search.html" className={`!p-0 before:!hidden ${direction === "ltr" ? "hover:ml-2" : "hover:mr-2"}`}>
                    {itemInfo.title}</a></li>
              )
            })
          }
        </ul>
      </div>

    </div>
  )
}