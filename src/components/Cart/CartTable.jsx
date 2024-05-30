import React from "react";
import { FiDelete, FiTrash } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removeToCart } from "../../redux/features/AddToCartSlice";
import CartDrawer from "./CartDrawer";

const CartTable = ({ cart }) => {
  const { name, price, rating, description, inStock, img } = cart;
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex border gap-3 rounded-2xl bg-[#fbf9f9] items-center relative">
        <div>
          <img src={img} alt={name} className="h-20 w-20 rounded-2xl" />
        </div>
        <div>
          <p className="font-bold text-black">{name}</p>
          <p className="font-semibold text-gray-500">
            Rating : <span className="text-yellow-300 font-bold">{rating}</span>
          </p>
          <p className="font-semibold text-gray-500">
            {" "}
            Price : <span className="text-blue-500 font-bold">${price}</span>
          </p>
        </div>
        <FiTrash
          onClick={() => dispatch(removeToCart(cart))}
          className="absolute right-3 bg-red-200 hover:bg-red-300 cursor-pointer  text-red-700 p-1 rounded-full w-7 h-7"
        />
      </div>
    </>
  );
};

export default CartTable;
