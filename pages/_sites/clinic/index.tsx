import React, { useEffect } from "react";
import { useRouter } from "next/router";

import "react-big-calendar/lib/css/react-big-calendar.css";

export default function ClinicPage() {
  let router = useRouter()
  React.useEffect(() => {
    router.push("/dashboard")
  }, [router])
}
