import { Title } from '@/components/index'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function AddressPage() {
  return (  
    
    <form className="w-full px-5 lg:px-15">
          <Title title="Address" />
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:items-center gap-6 mt-3 mx-2 lg:mx-60">
            <div className="w-full lg:w-64 sm:mr-10">
              <label htmlFor="first-name" className="block text-lg font-medium leading-6 text-black">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="block w-full rounded-md border-0 px-1 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full lg:w-64  sm:mr-10">
              <label htmlFor="last-name" className="block text-lg font-medium leading-6 text-black">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  
                  className="block w-full rounded-md border-0 px-1 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full lg:w-svw sm:mr-10 ">
              <label htmlFor="address" className="block text-lg font-medium leading-6 text-gray-900">
                Address
              </label>
              <div className="mt-2">
                <input
                  id="address"
                  name="address"
                  type="text"
                
                  className="block w-full rounded-md border-0 px-1 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full lg:w-64 mr-auto sm:mr-10">
              <label htmlFor="country" className="block text-lg font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 px-1 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="w-full lg:w-64 sm:mr-10">
              <label htmlFor="phone" className="block text-lg font-medium leading-6 text-gray-900">
                Telephone
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                 
                  className="block w-full rounded-md border-0 px-1 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full lg:w-64 sm:mr-10">
              <label htmlFor="city" className="block text-lg font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 px-1 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg sm:leading-6"
                />
              </div>
            </div>

            <div className="w-full lg:w-64 mr-auto sm:mr-10">
              <label htmlFor="region" className="block text-lg font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 px-1 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg sm:leading-6"
                />
               </div> 
            </div>

            <div className="w-full lg:w-64">
              <label htmlFor="postal-code" className="block text-lg font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 px-1 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg sm:leading-6"
                />
              </div>
            </div>
          {/* </div> */}
        </div>
  
      <div className="mt-6 flex justify-start mx-2 lg:mx-60 mb-10">
        <Link
          href="/checkout"
          className="rounded-md bg-indigo-600 px-10 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Next
        </Link>
      </div> 
    </form>

  )
}
