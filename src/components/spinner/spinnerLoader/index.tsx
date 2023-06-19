import styles from "./spinnerLoader.module.css"

type SpinnerLoaderTypes = {
  className?: string
}
export default function SpinnerLoader({ className }: SpinnerLoaderTypes) {


  return (
    <div className={`${styles.ldsRing}`}><div className={className}></div><div></div><div></div><div></div></div>
  )
}