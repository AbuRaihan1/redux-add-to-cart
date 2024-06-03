import {
  Badge,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle
} from "flowbite-react";
import React from "react";
import { FaCartPlus, FaHome } from "react-icons/fa";
import CartDrawer from "./Cart/CartDrawer";

import { useDispatch, useSelector } from "react-redux";
import {
  handleDrawerOpen
} from "../redux/features/CartDrawerSlice";

const NavbarComp = () => {
  const dispatch = useDispatch();
  const carts = useSelector((cart) => cart.cartStore.cart);
  return (
    <>
      <Navbar fluid rounded className=" bg-gray-100  fixed w-full ">
        <NavbarBrand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Cart System{" "}
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse className="relative">
          <NavbarLink href="/" active>
            <FaHome className="cursor-pointer w-8 h-8" />
          </NavbarLink>
          <FaCartPlus
            className="cursor-pointer w-8 h-8 "
            onClick={() => dispatch(handleDrawerOpen())}
          ></FaCartPlus>
          {carts?.length > 0 && (
            <Badge
              color="info"
              className="absolute right-[-10px] top-[-6px] bg-red-500 text-white rounded-full"
            >
              {carts?.length}
            </Badge>
          )}
        </NavbarCollapse>
      </Navbar>
      <CartDrawer />
    </>
  );
};

export default NavbarComp;
