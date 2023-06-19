import Specialities1 from "assets/specialities-01.png"
import Specialities2 from "assets/specialities-02.png"
import Specialities3 from "assets/specialities-03.png"
import Specialities4 from "assets/specialities-04.png"
import Specialities5 from "assets/specialities-05.png"
import Slide from "components/sites/clinic/landing/landingSections/slideSection/Slide"


type SlideSectionTypes = {
  direction: "ltr" | "rtl"
}
export default function SlideSection({ direction }: SlideSectionTypes) {

  let slideTitle = "Clinic and Specialities"
  let slideSubTitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  const sliderItems = [
    { imgSrc: Specialities5.src, title: "Dentist" },
    { imgSrc: Specialities1.src, title: "Urology" },
    { imgSrc: Specialities2.src, title: "Neurology" },
    { imgSrc: Specialities3.src, title: "Orthopedic" },
    { imgSrc: Specialities4.src, title: "Cardiologist" },
    { imgSrc: Specialities5.src, title: "Dentist" },
    { imgSrc: Specialities1.src, title: "Urology" },
    { imgSrc: Specialities2.src, title: "Neurology" },
    { imgSrc: Specialities3.src, title: "Orthopedic" },
    { imgSrc: Specialities4.src, title: "Cardiologist" },
    { imgSrc: Specialities5.src, title: "Dentist" },
  ]

  return (
    <Slide title={slideTitle} subTitle={slideSubTitle} direction={direction} items={sliderItems} />

  )
}