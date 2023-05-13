import React from "react"
import Head from "next/head";
import { useRouter } from "next/router";

import { removeDashAndCapitalize } from "utiles";

import OnBoarding from "components/sites/clinic/landing/onboarding"
export default function PatientOnBoarding () {

  const router = useRouter();

  const boardingList = [{itemTitle:"Registration",itemSubtitle:"Enter details for register "},{itemTitle:"Profile picture",itemSubtitle:"Upload profile picture"},{itemTitle:"Personal details",itemSubtitle:"Enter your personal details"},{itemTitle:"Select members",itemSubtitle:"Enter details for register"},{itemTitle:"Dependant details",itemSubtitle:"Dependants profile"},{itemTitle:"Other detail",itemSubtitle:"More information"}]



  return (
    <>
    <Head>
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@200;300;400;500;600;700;800;900" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <title>{removeDashAndCapitalize(router.asPath)}</title>
      </Head>
    <OnBoarding boardingList={boardingList}/>
    </>
  )
}