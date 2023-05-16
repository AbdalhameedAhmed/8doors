import React from "react"
import styles from "./collapseCheckMenu.module.css"
import RightMark from "assets/check-solid.svg"
import classNames from "classnames"


type collapseCheckMenuTypes = {
  title:string;
  hiddenComponent?:React.ReactNode
}
export default function CollapseCheckMenu({title, hiddenComponent}:collapseCheckMenuTypes) {
  let [hiddenField, showHiddenField] = React.useState(false)

  const handelCheck = () => {
    showHiddenField(!hiddenField)
  }

  return (
    <div className={`${styles.formGroup}`}>
      <div className={`${styles.pregnantCol} py-2`}>
        <div>
          <div className={`${styles.rememberMecol} d-flex justify-content-between align-items-center`}>
            <span className="mt-1">{title}</span>
            <label className={`${styles.customCheck}`}>
              <input type="checkbox" className="" name="pregnant" value="1" onChange={handelCheck} />
              <span className={`${styles.checkmark}`}>
                <RightMark />

              </span>
            </label>
          </div>
        </div>
      </div>
      {
        hiddenField && (
          <div className={classNames("step-process-col",{"mt-4":hiddenField && hiddenComponent})}>
            <div className={`${styles.formGroup}`} id="preg_div">
              {
                hiddenComponent
              }
            </div>
          </div>
        )
      }
    </div>
  )
}