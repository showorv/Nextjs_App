import React from 'react'

export default async function DynamicPage({params}: {
    params: Promise<{ blogId: string }>
  }) {

    // console.log( await params);

    const {blogId} = await params
    
  return (
    <div>Dynamic Page blogId: {blogId}</div>
  )
}
