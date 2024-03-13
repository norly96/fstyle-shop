import React from 'react'
import { IProduct } from 'src/interfaces'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    product: IProduct
}

export const ProductGridItem = ({product}:Props) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-sm shadow-gray-300 transition-all duration-300 hover:opacity-75 ">
        <Link href={`product/${product.slug}`}><Image src={`/products/${product.images[0]}`} alt={product.title} className='w-full object-cover' width={500} height={500}/>
        </Link>
        <div className="flex flex-col">
            <Link href={`product/${product.slug}`}>
                {product.title}
            </Link>
            <span className="font-bold">${product.price}</span>
        </div>
    </div>
  )
}

