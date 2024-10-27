
import React from "react";
import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../../redux/features/Cart/cart-slice";

const QuantityControl = ({ itemId, quantity }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(incrementQuantity(itemId));
  const handleDecrement = () => {
    if (quantity > 1) dispatch(decrementQuantity(itemId));
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleDecrement}
        className="px-2 py-1 text-gray-600 rounded text-xl bg-green-300"
      >
        -
      </button>
      <p className="px-4 py-2 rounded-full bg-slate-950 text-white font-extrabold">
        {quantity}
      </p>
      <button
        onClick={handleIncrement}
        className="px-2 py-1 bg-red-300 text-gray-600 rounded text-xl"
      >
        +
      </button>
    </div>
  );
};

export default QuantityControl;
