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

const CartPage = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 w-full px-5 lg:px-15">
      <Title title="Cart" className="col-span-2"/>
      {/* Section Left - Products Cart*/}
      <div className="col-span-2 lg:col-span-1 flex flex-col w-[300] sm:w-[520] lg:ml-12">
        
        {/* <h1 className="text-3xl font-bold tracking-tight text-black">
          Cart
        </h1> */}
        <Link href="/" className="my-2 w-36 underline text-base font-medium text-black"><span>Continue Shopping</span> </Link>
        {prodCart.map((prod) => (
          <div
            key={prod.title}
            className="flex justify-center flex-row lg:justify-start  gap-3 mt-3 items-center"
          >
            <Image
              src={`/products/${prod.images[0]}`}
              width={100}
              height={100}
              alt={prod.title}
            />

            <div>
              <h3 className="mb-4 text-sm sm:text-lg lg:text-xl w-60 sm:w-72 ">
                {prod.title}
              </h3>

              <div className="flex flex-row">
                <QuantitySelector quantity={3} />
                <button className="text-sm sm:text-lg bg-red-500 ml-4 rounded-lg px-3 text-white">
                  Delete
                </button>
              </div>
            </div>

            <span className="text-sm sm:text-lg font-bold -ml-10 sm:ml-1">
              ${prod.price}
            </span>
          </div>
        ))}
      </div>

      {/* Section Right*/}
      <div className="col-span-2 lg:col-span-1 flex flex-col justify-center mt-10 mb-10 lg:mr-12 py-5 lg:py-0 lg:mt-0 bg-white-100 shadow-xl rounded-lg px-4 ">
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

        <Link href="/checkout/address" className="my-4 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2  text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Checkout
        </Link>
      </div>
    </main>
  );
};

export default CartPage;
