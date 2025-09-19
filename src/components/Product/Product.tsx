import { IProduct } from '@/type'
import Image from 'next/image'
import React from 'react'

export default function Product({product}: {product: IProduct}) {
  return (
    <div>
        <div className='flex flex-col'>
        <Image src={product.image} alt={product.product_name} height={500} width={500}/>

        <div>
            <h2>{product.product_name}</h2>
            <p>{product.brand}</p>
            <p>{product.category}</p>
        </div>

        <div className='flex gap-5'>
            <button className='bg-black text-white border-0 px-5 py-2'>Details</button>
            <button className='bg-black text-white border-0 px-5 py-2'>Buy now</button>
        </div>

        </div>

    </div>
  )
}
