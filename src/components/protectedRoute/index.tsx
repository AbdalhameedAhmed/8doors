import React from "react"
import { useRouter } from 'next/router';

type props = {
    children: React.ReactNode
}

export default function ProtectedRoute({ children }: props) {
    const router = useRouter()
    React.useEffect(() => {
        const token = localStorage.getItem("token")
        if (token !== process.env.NEXT_PUBLIC_token) {
            router.push("/login")
        }
    }, [])


    return (<>{children}</>)
}