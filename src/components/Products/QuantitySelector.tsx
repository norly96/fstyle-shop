import { MinusCircleIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

interface Props {
  quantity: number;
}

const QuantitySelector = ({ quantity }: Props) => {
  return (
    <div className="flex items-center">
      <button>
      <MinusCircleIcon className="h-8 w-8 text-black" />
      </button>
      <span className="bg-gray-40 flex justify-center w-12 px-3">{4}</span>
      <button>
      <PlusCircleIcon className="h-8 w-8 text-black" />
      </button>
    </div>
  );
};

export default QuantitySelector;
