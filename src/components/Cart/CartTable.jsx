import React from "react";
import { FiDelete, FiTrash } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../../redux/features/AddToCartSlice";
import CartDrawer from "./CartDrawer";
import { HiMinus, HiPlus } from "react-icons/hi";
import {
  handleCartItemIncrease,
  handleCartItemDecrease,
} from "../../redux/features/AddToCartSlice.jsx";

const CartTable = ({ cart }) => {
  const { name, price, rating, description, inStock, img, quantity } = cart;
  const dispatch = useDispatch();

  return (
    <>
      <div className="border gap-3 rounded-2xl bg-[#fbf9f9] items-center pt-2 pb-3 px-2">
        <div className="flex justify-start gap-4 items-center">
          <div>
            <img src={img} alt={name} className="h-20 w-20 rounded-2xl" />
          </div>
          <div>
            <p className="font-bold text-black">{name}</p>
            <p className="font-semibold text-gray-500">
              Rating :{" "}
              <span className="text-yellow-300 font-bold">{rating}</span>
            </p>
            <p className="font-semibold text-gray-500">
              {" "}
              Price :{" "}
              <span className="text-blue-500 font-bold">
                $
                {(quantity > 0 && parseFloat(price * quantity).toFixed(2)) || 0}
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between bg-gray-100 b border rounded-full px-3 py-2 w-full mt-3">
          <div className="flex items-center gap-3">
            <HiMinus
              onClick={() => dispatch(handleCartItemDecrease(cart.id))}
              className="bg-gray-200 rounded-full p-1 w-6 h-6 cursor-pointer hover:bg-gray-300"
            />
            <p className="font-bold text-xl">{quantity}</p>
            <HiPlus
              onClick={() => dispatch(handleCartItemIncrease(cart.id))}
              className="bg-gray-200 rounded-full p-1 w-6 h-6 cursor-pointer hover:bg-gray-300"
            />
          </div>
          <FiTrash
            onClick={() => dispatch(removeToCart(cart))}
            className="bg-red-200 hover:bg-red-300 cursor-pointer  text-red-700 p-1 rounded-full w-7 h-7"
          />
        </div>
      </div>
    </>
  );
};

export default CartTable;
