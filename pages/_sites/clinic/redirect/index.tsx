import axios from "axios"
import { useRouter } from "next/router"
import React from "react"
import { toSubDomain } from "utiles"
import SmileFace from "components/spinner/smileFace/smileFace"

export default function Redirect() {
  const router = useRouter()
  const { page, token } = router.query
  console.log(page, token);


  React.useEffect(() => {
    console.log(page,token);
    
    if (token && page) {
      axios.post("/api/setToken", { token:token })
      setTimeout(()=>{
        router.push(toSubDomain("clinic",`/${page}`))
      },1100)
    }
  }, [page, router, token])

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold mb-12">Please wait while we redirect you to the desired page.</h1>
      <SmileFace />
    </div>
  )
}