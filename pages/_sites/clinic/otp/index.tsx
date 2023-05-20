import React from "react"
import Head from "next/head";

import classNames from "classnames";
import useRemoveScroll from "hooks/useRemoveScroll";

import LandingLayout from "components/layout/landingLayout";

import OtpPage from "components/sites/clinic/otp"
import BreadCrumb from "components/sites/clinic/landing/BreadCrumb"
import useCustomToast from "hooks/useCustomToast"

export default function Otp() {
    const ref = React.useRef(null)
    const customToast = useCustomToast()
    const handelBtn = () => {
        customToast("success", "Hello otp", true, true)


    }

    useRemoveScroll(ref)


    return (
        <div ref={ref} className={classNames("overflow-y-auto h-screen")} >
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@200;300;400;500;600;700;800;900" rel="stylesheet" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
            </Head>

            <LandingLayout>
                <BreadCrumb />
                <OtpPage onSuccess={handelBtn} />
            </LandingLayout>
        </div>
    )
}