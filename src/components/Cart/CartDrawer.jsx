import { Button, Drawer } from "flowbite-react";
import { HiArrowRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { handleDrawerClose } from "../../redux/features/CartDrawerSlice";
import CartTable from "./CartTable";
import { CartProgress } from "./ProgressBar";

const CartDrawer = () => {

  const savedItems = localStorage.getItem('localCart');
  if(savedItems) {
    const cartData = JSON.parse(savedItems);
    console.log(cartData);
  }

  const dispatch = useDispatch();
  const openDrawer = useSelector((state) => state.drawerStore.isOpen);
  const carts = useSelector((addCart) => addCart.cartStore.cart);

  const totalPrice = carts?.reduce((accumulator, item) => {
    const price = item.price * item.quantity;
    const total = (accumulator = accumulator + price);
    const parseTotal = Math.ceil(total);
    return parseTotal;
  }, 0);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => dispatch(handleDrawerClose())}
        position="right"
      >
        <Drawer.Header title="Added Cart" />
        <Drawer.Items>
          {carts?.length > 0 ? (
            <div className="space-y-3 mb-32">
              <CartProgress />
              {carts?.map((cart, idx) => (
                <CartTable cart={cart} key={idx} />
              ))}
            </div>
          ) : (
            <div>
              <h2 className="font-bold text-2xl flex justify-center items-center mt-20">
                No Cart Added{" "}
              </h2>
              <Button href="/ " pill className="mt-5 w-[200px] ml-12">
                Go to shop{" "}
              </Button>
            </div>
          )}

          {carts?.length > 0 && (
            <div className="w-[280px] h-[130px] bottom-0 fixed bg-white border-t pt-2">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-2xl">Subtotal</h2>
                <p className="font-bold text-2xl">${totalPrice}</p>
              </div>
              <Button color="dark" pill className="absolute bottom-3 ml-14">
                Procced to checkout
                <HiArrowRight className="ml-2 h-5 w-5 " />
              </Button>
            </div>
          )}
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default CartDrawer;
