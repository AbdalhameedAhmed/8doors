import Link from "next/link";

export default function UncompletedInfo() {




  return (
    <Link href="/individual-dashboard" className="w-full block cursor-pointer py-1 text-center text-white bg-[rgb(245,83,83,0.75)]">
      You have to complete your profile data
    </Link>
  )
}