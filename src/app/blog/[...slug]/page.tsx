import React from 'react'

export default async function CatchAllRoute({params}: { params: Promise<{slug: string}>}) {
    console.log(await params);

    const {slug} = await params
    
  return (
    <div>CatchAllRoute : {slug} </div>
  )
}
