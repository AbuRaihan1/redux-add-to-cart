import React from "react";
import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartTable from "./CartTable";
import { handleDrawerClose } from "../../redux/features/CartDrawerSlice";
const CartDrawer = () => {
  const openDrawer = useSelector((state) => state.handleDrawerOpen.isOpen);
  const dispatch = useDispatch();
  const carts = useSelector((addCart) => addCart.addToCart.cart);
  return (
    <>
      <div className="flex min-h-[50vh] items-center justify-center"></div>
      <Drawer
        open={openDrawer}
        onClose={() => dispatch(handleDrawerClose())}
        position="right"
      >
        <Drawer.Header title="Added Cart" />
        <Drawer.Items>
          <div className="space-y-3">
            {carts?.map((cart, idx) => (
              <CartTable cart={cart} key={idx} />
            ))}
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default CartDrawer;
