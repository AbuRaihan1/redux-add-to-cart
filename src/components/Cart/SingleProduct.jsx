import React, { useState } from "react";
import { Card, Toast } from "flowbite-react";
import { HiCheck } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/AddToCartSlice";
import { handleDrawerOpen } from "../../redux/features/CartDrawerSlice";
import CartDrawer from "./CartDrawer";
import { FaLastfmSquare } from "react-icons/fa";

const SingleProduct = ({ product }) => {
  const { name, price, rating, description, inStock, img } = product;
  const [addCartBtn, setAddCartBtn] = useState(false);
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const carts = useSelector((addedCart) => addedCart.cartStore.cart);

  // const singleCart = carts?.map((oneCart) => {
  //   oneCart.id === product.id;
  // });

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const addToCartProduct = () => {
    // if (carts?.length < 0) {
    //   setAddCartBtn(false);
    // }
    // if (addCartBtn === true && carts?.length > 0) {
    //   setAddCartBtn(true);
    // }
    dispatch(addToCart(product));
    handleShowToast();
    dispatch(handleDrawerOpen());
    setAddCartBtn(true);

    // if (addCartBtn === false && carts?.length <= 0) {
    // }
  };

  const getID = (id) => {
    // console.log(id);
  };

  return (
    <div className="border p-4">
      {showToast && (
        <>
          <Toast className="border fixed bottom-3 left-3 z-50 mx-auto">
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
              <HiCheck className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
              <span className="font-bold text-green-400">
                {product?.name || cart}
              </span>{" "}
              Added Successfully
            </div>
            <Toast.Toggle onDismiss={() => setShowToast(false)} />
          </Toast>
        </>
      )}
      <img src={img} alt={name} className="w-full h-[200px]" />
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-2">
          {name}
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          5.0
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {price}
        </span>

        <div>
          <div onClick={addToCartProduct}>
            {addCartBtn ? (
              <span
                className="cursor-not-allowed bg-red-200 p-2 rounded-lg font-bold text-gray-400"
                disabled
              >
                Already Added Cart
              </span>
            ) : (
              <button
                onClick={() => getID(product.id)}
                className="cursor-pointer rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none"
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
