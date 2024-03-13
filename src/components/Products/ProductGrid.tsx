import { IProduct } from 'src/interfaces'
import { ProductGridItem } from '@/components/index'

interface Props {
    products: IProduct[]
}

export const ProductGrid = ( {products}:Props ) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 mt-3 mx-12 mb-10">
        
    {
        products && products.map((product, index) => {
            return <ProductGridItem key={index} product={product}/>
        })
    }
    </div>
  )
}
