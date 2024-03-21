import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { initialData } from "src/seed/seed";
import SizeSelector from "@/components/Products/SizeSelector";
import QuantitySelector from "@/components/Products/QuantitySelector";
import ProductSlideshow from '../../../../components/Products/ProductSlideshow';
import ProductMobileSlideshow from "@/components/Products/ProductMobileSlideshow";

interface Props {
  params: {
    slug: string;
  };
}

const ProductPage = ({ params }: Props) => {
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }
  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:flex lg:max-w-xl lg:flex-col lg:px-2">
          
            
            {/* Mobile SlidesShow*/}
            <div className="block md:hidden">
              <ProductMobileSlideshow images={product.images} title={product.title}  />
            </div>
            

            {/* Desktop SlidesShow*/}
            <div className="hidden md:block" >
              <ProductSlideshow images={product.images} title={product.title} />
            </div>
            
        
        </div>

        {/* Product info hidden overflow-hidden  */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:max-w-xl lg:px-2 lg:pb-24 lg:pt-10">
          <div className="lg:col-span-2  lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.title}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <p className="text-3xl tracking-tight text-gray-900">
              $ {product.price}
            </p>

            <form className="mt-10">
              {/* Sizes */}
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>

                <SizeSelector
                  selectSize={product.sizes[0]}
                  availableSizes={product.sizes}
                />
              </div>

              {/* Quantity */}
              <div className="mt-5">
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  Quantity
                </h3>

                <QuantitySelector quantity={4} />
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center lg:w-52 justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to cart
              </button>
            </form>
          </div>
          {/* Description */}
          <div className="py-6 lg:pr-6 lg:pt-6">
            <p className="text-base text-gray-900">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
