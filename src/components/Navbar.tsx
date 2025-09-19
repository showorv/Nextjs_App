import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <div className=' min-w-full flex justify-between items-center bg-blue-800 px-5 py-3 '>
        <Link href="/"> <h2>Next Js</h2></Link>
           

            <div>
                <Link href="/about" className='text-2xl mr-2'>About</Link>
                <Link href="/contact" className='text-2xl mr-2'>Contact</Link>
                <Link href="/counter" className='text-2xl '>Counter</Link>
            </div>
        </div>
    </div>
  )
}
