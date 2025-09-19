"use client"

import React, { useState } from 'react'

export default function Counter() {

    const [counter, setCounter ] = useState(0)

    console.log(counter);
    

  return (
    <div>
        <div className='min-h-screen flex justify-center items-center gap-3'>
            <button className=' border-0 px-3 py-2 bg-red-700 text-white ' onClick={()=> setCounter((count)=> count -1 )}>decrement</button>
            <button>{counter}</button>
            <button className=' border-0 px-3 py-2 bg-blue-800 text-white ' onClick={()=> setCounter((count)=> count +1 )}>increment</button>
        </div>
    </div>

   
  )
}
