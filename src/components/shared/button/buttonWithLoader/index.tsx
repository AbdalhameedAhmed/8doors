import styles from "./buttonWithLoader.module.css"
import Spinner from "components/spinner/spinnerLoader"
import { MouseEvent } from "react"


type BtnWithLoaderTypes = {
  onClick?: (event: MouseEvent) => void;
  className?: string;
  showSpinner: boolean;
  disabled?: boolean;
  fullWidht?: boolean;
  title: string
  spinerStyles?:string
}
export default function BtnWithLoader({ onClick = () => { }, className, showSpinner, disabled = false, fullWidht = true, title ,spinerStyles}: BtnWithLoaderTypes) {


  return (
    <>
      <button
        type="submit"
        disabled={disabled}
        className={`btn ${styles.loginBtn} ${styles.loginBtnPrimary}  ${className} ${!fullWidht && styles.fittContent}`}
        onClick={(event) => { onClick(event) }}
      >
        {title}
        {showSpinner && <Spinner className={spinerStyles} />}
      </button>
    </>
  )
}