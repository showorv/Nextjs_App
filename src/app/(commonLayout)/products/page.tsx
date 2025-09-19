import Product from '@/components/Product/Product';
import { IProduct } from '@/type';
import React from 'react'

export default async function ProductPage() {

  const res = await fetch("http://localhost:5000/products")
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
