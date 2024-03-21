"use client"
import { notFound } from 'next/navigation'
import React from 'react'
import { Title } from '@/components/ui/Title/Title';
import { ProductGrid } from '@/components/index';
import { initialData } from 'src/seed/seed';
import { Category } from 'src/interfaces';

interface Props {
  params: {
    id: Category
  }
}

const CategoryPage = ({params}: Props) => {
  const {id} = params
  const products = initialData.products
  const productsFiltred = products.filter((product)=> product.gender === id)
  

/*   if( id === "kid"){
    notFound()
  } */

  return (
    <main className="w-full px-5 lg:px-15">
      <Title title={id} subtitle={`Clothes ${id}`}/>
      <ProductGrid products={productsFiltred}/>
    </main>
  )
}

export default CategoryPage
