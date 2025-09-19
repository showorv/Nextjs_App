"use client"

import { useEffect } from "react"

export default function ErrorPage({error, reset}: {
    error: Error & { digest?: string }
    reset: () => void
  }) {

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
      }, [error])

  return (
    <div>
        <h1 className='text-center text-red-700'>Something went wrong</h1>
        <h1 className='text-center text-red-700'>{error?.message}</h1>

        <button onClick={()=> reset()} className='bg-red-700 text-white border-0 px-5 py-2'>Reset</button>
        
    </div>
  )
}
