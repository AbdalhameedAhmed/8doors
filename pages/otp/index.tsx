import React from "react"

import classNames from "classnames";
import useRemoveScroll from "hooks/useRemoveScroll";

import LandingLayout from "components/layout/landingLayout";

import OtpPage from "components/sites/clinic/otp"
import BreadCrumb from "components/sites/clinic/landing/breadCrumb"
import { removeDashAndCapitalize } from "utiles";
import { useRouter } from "next/router";





export default function Otp() {
    const ref = React.useRef(null)
    const router = useRouter()
    console.log(router);
    
    useRemoveScroll(ref)

    React.useEffect(()=>{
        document.title = removeDashAndCapitalize(router.asPath)
    },[router.asPath])


    return (
        <div ref={ref} className={classNames("h-screen")} >

            <LandingLayout>
                <BreadCrumb />
                <OtpPage/>
            </LandingLayout>
        </div>
    )
}