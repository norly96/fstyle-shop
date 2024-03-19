import clsx from 'clsx'
import React from 'react'
import { Size } from 'src/interfaces'

interface Props {
    selectSize: Size
    availableSizes: Size[]
}

const SizeSelector = ({ selectSize, availableSizes}: Props) => {
  return (
    <div>
        {
            availableSizes.map( size => (
                <button key={size} className={clsx("mt-2 items-center w-16 mx-1 justify-center rounded-md border border-gray-200 bg-transparent px-3 py-3 text-base font-medium text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500",
                    {"focus: bg-blue-300": size === selectSize}
                )}>{size}</button>
            ))
        }
    </div>
  )
}

export default SizeSelector