import { Toast } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiCheck } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/AddToCartSlice";
import { handleDrawerOpen } from "../../redux/features/CartDrawerSlice";

const SingleProduct = ({ product }) => {
  const { name, price, description, img } = product;
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);
  const [addCart, setAddCart] = useState([]);

  useEffect(() => {
    // Initialize state from localStorage if available
    const savedCart = localStorage.getItem('localCart');
    if (savedCart) {
      setAddCart(JSON.parse(savedCart));
    }
  }, []);

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const addToCartProduct = () => {
    dispatch(addToCart(product));
    handleShowToast();
    dispatch(handleDrawerOpen());
  };

  return (
    <div className="p-4 rounded-lg shadow-md">
      {showToast && (
        <>
          <Toast className="border fixed bottom-3 left-3 z-50 mx-auto">
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
              <HiCheck className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
              <span className="font-bold text-green-400">
                {product?.name}
              </span>{" "}
              Added Successfully
            </div>
            <Toast.Toggle onDismiss={() => setShowToast(false)} />
          </Toast>
        </>
      )}
      <img src={img} alt={name} className="w-full h-[200px] rounded-lg" />
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-2">
        {name}
      </h5>
      <div className="mb-5 mt-2.5 flex items-center">
        <p className="text-gray-400 font-semibold">{description}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {price}
        </span>
        <div>
          <div onClick={addToCartProduct} className="">
            <button className="cursor-pointer rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
