"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {

  const pathname = usePathname()
  return (
    <div>
        <div className=' min-w-full flex justify-between items-center bg-blue-800 px-5 py-3 '>
        <Link href="/"> <h2>Next Js</h2></Link>
           

            <div>
                <Link href="/about" className={` ${pathname === "/about"? "text-blue-600 underline font-semibold": "text-white hover:underline"} text-2xl mr-2`}>About</Link>
                <Link href="/contact" className={` ${pathname === "/contact"? "text-blue-600 underline font-semibold": "text-white hover:underline"} text-2xl mr-2`}>Contact</Link>
                <Link href="/products" className={` ${pathname === "/products"? "text-blue-600 underline font-semibold": "text-white hover:underline"} text-2xl mr-2`}>Product</Link>
                <Link href="/gallery" className={` ${pathname === "/gallery"? "text-blue-600 underline font-semibold": "text-white hover:underline"} text-2xl mr-2`}>Gallery</Link>
                <Link href="/counter" className={` ${pathname === "/counter"? "text-blue-600 underline font-semibold": "text-white hover:underline"} text-2xl mr-2`}>Counter</Link>
            </div>
        </div>
    </div>
  )
}
