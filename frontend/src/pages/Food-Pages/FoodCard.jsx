import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/Cart/cart-slice";
import QuantityControl from "../Common/QuantityControl";

const FoodCard = ({ item }) => {
  
  const dispatch = useDispatch();
  const handleToCart = (product) => {
    dispatch(addToCart(product));
  };
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id);
  console.log(cartItems)
  
  return (
    <>
      <div className=" rounded-lg transition-shadow shadow-lg duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4">
          <div className="sm:h-72  sm:flex-shrink-0 border rounded-md">
            <Link to={`/foods/${item._id}`}>
              <img
                src={`${getImgUrl(item.coverImage)}`}
                alt=""
                className="   w-[150px] bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200 "
              />
            </Link>
          </div>

          <div>
            <Link to={`/foods/${item._id}`}>
              <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
                {item.title}
              </h3>
            </Link>
            <p className="text-gray-600 mb-5">
              {item.description.length > 80
                ? `${item.description.slice(0, 100)}...`
                : item.description}{" "}
            </p>
            <p className="font-medium mb-5">
              {item.oldPrice}{" "}
              <span className="line-through font-normal ml-2">
                {item.newPrice}
              </span>
            </p>
            {
              isItemInCart ? (
                <QuantityControl  itemId={item._id} quantity={isItemInCart.quantity} />
              ) : (
                <button
                  className="btn-primary px-6 space-x-1 flex items-center gap-1 "
                  onClick={() => handleToCart(item)}
                >
                  <FiShoppingCart className="" />
                  <span>Add to Cart</span>
                </button>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
