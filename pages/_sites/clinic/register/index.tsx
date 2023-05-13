import React from "react"
import Head from "next/head";
import Register from "components/sites/clinic/landing/register/Register";

import LandingLayout from "components/layout/landingLayout"
import classNames from "classnames";
import useRemoveScroll from "hooks/useRemoveScroll";

export default function RegisterPage () {

    const pageRef = React.useRef(null)
    
    useRemoveScroll(pageRef)


    return (
        <div ref={pageRef} className={classNames("overflow-y-auto h-screen")}>
         <Head>
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@200;300;400;500;600;700;800;900" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        </Head>
        <LandingLayout>
            <Register/>
        </LandingLayout>
        </div>
    )
}