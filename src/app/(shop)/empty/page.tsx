import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

const EmptyCart = () => {
  return (
    <main className="flex flex-col mt-20 items-center w-full  ">
     
      <ShoppingCartIcon className="h-20 w-20 sm:h-40 sm:w-40 text-indigo-500 " />
      <h1 className="my-4 text-3xl font-bold tracking-tight text-black sm:text-5xl">Your cart is empty</h1>
    
        <Link
          href="/"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go back 
        </Link>
       
    


    </main>
  )
}

export default EmptyCart