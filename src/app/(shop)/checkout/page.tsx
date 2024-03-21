import { initialData } from "src/seed/seed"
import Image from "next/image";
import QuantitySelector from "@/components/Products/QuantitySelector"
import Link from "next/link";
import { Title } from "@/components/index";

const prodCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

const CheckoutPage = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 w-full px-5 lg:px-15">
      <Title title="Check order" className="col-span-2"/>
      {/* Section Left - Products Cart*/}
      <div className="col-span-2 lg:col-span-1 flex flex-col w-[300] sm:w-[520] lg:ml-12">
        
        <Link href="/cart" className="my-2 w-36 underline text-base font-medium text-black"><span>Edit Cart</span> </Link>
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

        <div className="flex items-center mt-2">
          <input type="checkbox" className="h-4 w-4 mr-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
          <p>I accept the <Link href="#" className="underline text-blue-400">terms and conditions</Link>  of the data protection policy</p>
        </div>
 
        <Link href="/orders/123" className="my-4 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2  text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Place order
        </Link>
      </div>
    </main>
  );
};

export default CheckoutPage;
