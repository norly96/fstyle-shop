import { Title } from '@/components/index'
import { CreditCardIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

const OrdersPage = () => {
  return (
    <main className="w-full px-5 lg:px-15">
    <Title title="Orders" />

<div className="flex flex-col">
  <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th scope="col" className="text-sm sm:text-lg font-bold text-gray-900 px-6 py-4 text-left">
                #ID
              </th>
              <th scope="col" className="sm:text-lg text-sm font-bold text-gray-900 px-6 py-4 text-left">
                Nombre
              </th>
              <th scope="col" className="sm:text-lg text-sm font-bold text-gray-900 px-6 py-4 text-left">
                Estado
              </th>
              <th scope="col" className="sm:text-lg text-sm font-bold text-gray-900 px-6 py-4 text-left">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-lg font-medium text-gray-900">1</td>
              <td className="sm:text-lg text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Mark
              </td>
              <td className="sm:text-lg text-sm flex items-center text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <CreditCardIcon className="h-6 w-6 text-black mr-2" />
              <span>Pagado</span>
              </td>
              <td className="text-sm sm:text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <Link href="#"><span className="hover:underline">Ver Orden</span></Link>
              </td>
            </tr>
            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-lg font-medium text-gray-900">2</td>
              <td className="text-sm sm:text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Jacob
              </td>
              <td className="text-sm sm:text-lg flex items-center text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <CreditCardIcon className="h-6 w-6 text-black mr-2" />
              <span>No Pagado</span>
              </td>
              <td className="text-sm sm:text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 <Link href="#"><span className="hover:underline">Ver Orden</span></Link>
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </main>
  )
}

export default OrdersPage