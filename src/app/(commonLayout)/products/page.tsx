import Product from '@/components/Product/Product';
import { IProduct } from '@/type';
import React from 'react'

export default async function ProductPage() {

  const res = await fetch("http://localhost:5000/products", {
    // cache: "force-cache" // loading once in production level . use for static data eg: product categories, FAQs, landing page conten
    // next:{
    //   revalidate: 30, // 30 scnd por por fetch refresh hbe jdi kisu update hoy ta ui te update hbe but eta ucith na

    //   // for that use tag

    //   tags: ['products'] 
    // }

    cache: "no-store" // user er req er mddhome html build hoye then ui te updated ta show kore. age theke build hoy na. only problem is it takes loading ,
  })
  const products = await res.json()

  console.log(products);
  
  return (
    <div>
    <h1>All products</h1>
    <div>
      {products.map((product: IProduct)=> <Product key={product?.id} product={product}/>)}
    </div>
    </div>
  )
}
