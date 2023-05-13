import styles from "./onBoarding.module.css"
import SideImg from "assets/doctorOnBoarding/onb-slide-img.png"
import Image from "next/image"

export default function LeftPanel() {




  return (
    <div className={`${styles.leftPanel} !overflow-hidden !flex`}>
      <div className="text-center">
        <a href="index.html">
          <p className="text-logo text-4xl font-bold transition-all pb-2 duration-300">8doors</p>
        </a>
      </div>
      <div className={`${styles.onboardImg}`}>
        <img src="/onb-slide-img.png" width={500} height={650} alt="left side image" />
      </div>
      {/* <div className={`${styles.onboardingSlider}`}>

        <div id="onboard-slider" className="owl-carousel owl-theme onboard-slider slider owl-loaded owl-drag">


          <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: "translate3d(-727px, 0px, 0px)", transition: "all 0.45s ease 0s", width: "1698px" }}><div className="owl-item cloned" style={{ width: "212.5px", marginRight: "30px" }}><div className="onboard-item text-center">
            <div className="onboard-content">
              <h3>Welcome to Doccure</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div></div><div className="owl-item cloned" style={{ width: "212.5px", marginRight: "30px" }}><div className="onboard-item text-center">
            <div className="onboard-content">
              <h3>Welcome to Doccure</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div></div><div className="owl-item" style={{ width: "212.5px", marginRight: "30px" }}><div className="onboard-item text-center">
            <div className="onboard-content">
              <h3>Welcome to Doccure</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div></div><div className="owl-item active" style={{ width: "212.5px", marginRight: "30px" }}><div className="onboard-item text-center">
            <div className="onboard-content">
              <h3>Welcome to Doccure</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div></div><div className="owl-item" style={{ width: "212.5px", marginRight: "30px" }}><div className="onboard-item text-center">
            <div className="onboard-content">
              <h3>Welcome to Doccure</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div></div><div className="owl-item cloned" style={{ width: "212.5px", marginRight: "30px" }}><div className="onboard-item text-center">
            <div className="onboard-content">
              <h3>Welcome to Doccure</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div></div><div className="owl-item cloned" style={{ width: "212.5px", marginRight: "30px" }}><div className="onboard-item text-center">
            <div className="onboard-content">
              <h3>Welcome to Doccure</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div></div></div></div><div className="owl-nav"><button type="button" role="presentation" className="owl-prev"></button><button type="button" role="presentation" className="owl-next"></button></div><div className="owl-dots"><button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot active"><span></span></button><button role="button" className="owl-dot"><span></span></button></div></div>

      </div> */}
      <div className="text-center ">

        <h1 className="text-white text-[21px] font-[600] mb-2">Welcome to 8doors</h1>
        <p className="text-white text-[13px] font-[400]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
    
      </div>
    </div>
  )
}