import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
  params: {
    id: string
  }
}

const CategoryPage = ({params}: Props) => {
  const {id} = params
  return (
    <div>CategoryPage { id }</div>
  )
}

export default CategoryPage