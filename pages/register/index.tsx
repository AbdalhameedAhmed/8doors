import React from "react"
import Head from "next/head";
import Register from "components/sites/clinic/landing/register/Register";

import LandingLayout from "components/layout/landingLayout"
import classNames from "classnames";
import useRemoveScroll from "hooks/useRemoveScroll";
import { useRouter } from "next/router";
import { removeDashAndCapitalize } from "utiles";

export default function RegisterPage() {
    const pageRef = React.useRef(null)
    const router = useRouter()
    useRemoveScroll(pageRef)


    React.useEffect(() => {
        document.title = removeDashAndCapitalize(router.asPath)
    }, [router.asPath])

    return (
        <div ref={pageRef} className={classNames("overflow-y-auto h-screen")}>
            <LandingLayout>
                <Register />
            </LandingLayout>
        </div>
    )
}