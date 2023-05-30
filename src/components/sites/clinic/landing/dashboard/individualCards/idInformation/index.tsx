import styles from "./idInfo.module.css"
import IdFrontSide from "assets/dashboard/idFrontSide.jpg"
import IdBackSide from "assets/dashboard/idBackSide.jpg"
import UploadImage from "./Uploadimage"




type idInfoType = {
  direction?: "rtl" | "ltr"
}
export default function IdInfo({ direction }: idInfoType) {

  const btnHandler = () => {

  }
  return (
    <div className={`card ${styles.infoCard} w-full`}>
      <div className={`card-body ${styles.infoCardBody} w-full`}>
        <form>
          <div className="row form-row w-full gap-8">

            <UploadImage name="frontImage" direction={direction} defaultImageSrc={IdFrontSide.src} />
            <UploadImage name="backImage" direction={direction} defaultImageSrc={IdBackSide.src} />


        <div className={`${styles.submitSection} offset-8 text-right pr-[84px] col-3`}>
          <button type="submit" className="btn btn-primary submit-btn" onClick={() => { btnHandler() }}>Save Changes</button>
        </div>
          </div>
        </form>

      </div>
    </div>
  )
}