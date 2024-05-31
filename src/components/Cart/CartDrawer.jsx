import { useDispatch, useSelector } from "react-redux";
import CartTable from "./CartTable";
import { Button, Drawer, Dropdown } from "flowbite-react";
import { handleDrawerClose } from "../../redux/features/CartDrawerSlice";
import { HiArrowRight } from "react-icons/hi";

const CartDrawer = () => {
  const dispatch = useDispatch();
  const openDrawer = useSelector((state) => state.drawerStore.isOpen);
  const carts = useSelector((addCart) => addCart.cartStore.cart);

  const totalPrice = carts?.reduce((accumulator, item) => {
    const price = item.price * item.quantity;
    const total = (accumulator = accumulator + price);
    const parseTotal = Math.round(total);
    return parseTotal;
  }, 0);
  return (
    <>
      <div className="flex min-h-[50vh] items-center justify-center absolute"></div>
      <Drawer
        open={openDrawer}
        onClose={() => dispatch(handleDrawerClose())}
        position="right"
      >
        <Drawer.Header title="Added Cart" />
        <Drawer.Items>
          <div className="space-y-3 mb-32">
            {carts?.map((cart, idx) => (
              <CartTable cart={cart} key={idx} />
            ))}
          </div>

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
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default CartDrawer;
