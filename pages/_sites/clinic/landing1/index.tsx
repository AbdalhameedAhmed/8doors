import Hero from "components/sites/clinic/landing/hero";
import Script from "next/script";
import Navbar from "components/sites/clinic/landing/Navbar"
import Slide from "components/sites/clinic/landing/Slide"
import BookOutDoctor from "components/sites/clinic/landing/BookOutDoctor"


import Head from "next/head";
import Footer from "components/sites/clinic/landing/Footer";
export default function Landing1() {



  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@200;300;400;500;600;700;800;900" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
      </Head>

      <Navbar />
      <Hero />
      <Slide />
      <BookOutDoctor />
      <Footer />


    </>
  )
}