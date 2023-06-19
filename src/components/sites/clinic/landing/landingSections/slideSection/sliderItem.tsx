// import { sliderItemTypes } from "types/landingTypes/sliderTypes/sliderItem"
import styles from "./slide.module.css"


type sliderItemTypes = {
  itemInfo: {
    title: string;
    imgSrc: string;
  }
}

export default function SliderITem({ itemInfo }: sliderItemTypes) {


  return (
    <div className={`${styles.slickSlide}`} data-slick-index="0" aria-hidden="true" role="tabpanel" id="slick-slide00" tabIndex={-1} aria-describedby="slickSlide-control00">
      <div>
        <div className={`${styles.speicalityItem} text-center`} style={{ width: "100%", display: "inline-block" }}>
          <div className={`${styles.speicalityImg}`}>
            <img src={itemInfo.imgSrc} className="img-fluid" alt="Speciality" />
            <span className="w-[25px] h-[25px] rounded-full !flex !items-center !justify-center"> <span className="!bg-[#0de0fe] !static w-[15px] h-[15px] rounded-full "></span></span>
          </div>
          <p>{itemInfo.title}</p>
        </div>
      </div>
    </div>
  )
}