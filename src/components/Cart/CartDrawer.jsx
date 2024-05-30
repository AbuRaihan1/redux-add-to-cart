import React from "react";
import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CartTable from "./CartTable";
const CartDrawer = ({ isOpen, setIsOpen }) => {
  const handleClose = () => setIsOpen(false);
  const carts = useSelector((addCart) => addCart.addToCart.cart);
  return (
    <>
      <div className="flex min-h-[50vh] items-center justify-center"></div>
      <Drawer open={isOpen} onClose={handleClose} position="right">
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
