import { initialData } from "src/seed/seed"
import Image from "next/image";
import QuantitySelector from "@/components/Products/QuantitySelector"
import Link from "next/link";
import { Title } from "@/components/index";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";




interface Props {
  params: {
    id: string
  }
}

const prodCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

const OrderById = ({params}: Props) => {
  const { id } = params
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 w-full px-5 lg:px-15">
      <Title title={`Order #${id}`} className="col-span-2"/>
      {/* Section Left - Products Cart*/}
      <div className="col-span-2 lg:col-span-1 flex flex-col w-[300] sm:w-[520] lg:ml-12">
        
      <div className={clsx("flex items-center my-2 justify-center py-2 rounded-md",{
          'bg-red-600': false,
          'bg-green-600': true
        })} >
        <CreditCardIcon className="h-6 w-6 text-white mr-2" />
        <span className="text-white font-medium">Pagado</span>
         </div>
         
        {prodCart.map((prod) => (
          <div
            key={prod.title}
            className="flex justify-center flex-row lg:justify-start gap-3 mt-3 items-center"
          >
            <Image
              src={`/products/${prod.images[0]}`}
              width={100}
              height={100}
              alt={prod.title}
            />

            <div className="flex flex-col">
              <h3 className="mb-1 text-sm sm:text-lg lg:text-xl w-60 sm:w-72 ">
                {prod.title}
              </h3>

              
                <span className="text-sm sm:text-lg font-light ">
              ${prod.price} x 3
            </span>
            <span className="text-sm sm:text-lg font-bold  ">
             Subtotal: ${prod.price * 3}
            </span>
             
              
            </div>

            
          </div>
        ))}
      </div>

      {/* Section Right*/}
      <div className="col-span-2 lg:col-span-1 flex flex-col justify-center mt-10 mb-10 lg:mr-12 py-5 lg:py-0 lg:mt-0 bg-white-100 shadow-xl rounded-lg px-4 ">
      <h1 className="text-2xl font-extrabold mb-2">Delivery Address</h1>
        <div className="flex flex-col">
         
          <span className="text-xl">Dwayne Wade</span>{" "}
          <span className="text-lg">Street 6 Apart 5</span>{" "}
          <span className="text-lg">Florida</span>{" "}
          <span className="text-lg">Miami</span>{" "}
          <span className="text-lg">33126</span>{" "}
          <span className="text-lg">783.343.1234</span>{" "}

          <div className="border-b border-gray-200 my-2"/>
          
        </div>
        
        <h1 className="text-2xl font-extrabold mb-2">Order Summary</h1>
        <div className="flex justify-between">
          {" "}
          <span className="text-lg">No. Products</span>{" "}
          <span className="text-lg font-bold">4</span>{" "}
        </div>
        <div className="flex justify-between">
          {" "}
          <span className="text-lg">Subtotal</span>{" "}
          <span className="text-lg font-bold">$ 100</span>{" "}
        </div>
        <div className="flex justify-between">
          {" "}
          <span className="text-lg">Taxes (15%)</span>{" "}
          <span className="text-lg font-bold">$ 200</span>{" "}
        </div>
        <div className="flex justify-between">
          {" "}
          <span className="text-lg">Shipping</span>{" "}
          <span className="text-lg font-bold">$ 45</span>{" "}
        </div>
        <div className="flex justify-between mt-2">
          {" "}
          <span className="text-lg">Total</span>{" "}
          <span className="text-lg font-bold">$ 400</span>{" "}
        </div>

        <div className={clsx("flex items-center my-2 justify-center py-2 rounded-md",{
          'bg-red-600': false,
          'bg-green-600': true
        })} >
        <CreditCardIcon className="h-6 w-6 text-white mr-2" />
        <span className="text-white font-medium">Pagado</span>
         </div>
 
      
      </div>
    </main>
  );
};

export default OrderById;
