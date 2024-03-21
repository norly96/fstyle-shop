"use client"

import { MinusCircleIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface Props {
  quantity: number;
}

const QuantitySelector = ({ quantity }: Props) => {
    const [count, setCount] = useState(quantity)

    const handleCount = ( value: number) => {
        if( count + value < 1) return;
        setCount(count + value)
    }
  return (
    <div className="flex items-center">
      <button onClick={()=> handleCount(-1)}>
      <MinusCircleIcon className="h-8 w-8 text-black" />
      </button>
      <span className="bg-gray-40 flex justify-center w-12 px-3">{count}</span>
      <button onClick={()=> handleCount(+1)}>
      <PlusCircleIcon className="h-8 w-8 text-black" />
      </button>
    </div>
  );
};

export default QuantitySelector;
