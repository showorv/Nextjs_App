"use client"

import { useRouter } from "next/navigation"


export default function HomePage() {

  //hook

  const router = useRouter()
  const handleNavigation = ()=> {
    router.push("/dashboard")
  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-2">
      <h1 className="text-4xl">Welcome to nextjs learning</h1>
      <button className="border-0 bg-red-600 px-3 py-2 border-r-2 cursor-pointer" onClick={handleNavigation}>Dashboard</button>
    </div>
  )
}
