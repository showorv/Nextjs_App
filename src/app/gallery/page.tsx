import Image from 'next/image'
import React from 'react'

export default function GalleryPage() {
  return (
    <div className='flex flex-col items-center min-h-screen'>
        <h2>Image gallery</h2>

        {/* built in Image component */}

        <Image src="https://m.media-amazon.com/images/I/61zthhpwllL._SY625_.jpg" alt='' width={500} height={500} className='mx-auto'/>


        
    </div>
  )
}

// src er mddhe assets folder e image rakhle import korte hbe

// public er mddhe image rkhle import korte hbe na.direct pawa jabe src="/public/image.*" erpor /public kete dibo