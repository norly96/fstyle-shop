import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
	<footer className=" bg-white md:px-6 mb-2 ">
		<hr className="my-2 border-gray-200 sm:mx-auto " />
		<span className="flex text-sm text-black text-center justify-center items-center">© { new Date().getFullYear()}. Powered by <Link href="https://www.norly96.com" target="_blank"><Image src='/n96.svg' width={15} height={15} alt={''} className="mx-2"/></Link>All Rights Reserved.
    </span>
	</footer>   
  )
}

export default Footer