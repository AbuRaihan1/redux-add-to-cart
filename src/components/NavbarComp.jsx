import React from "react";
import CartDrawer from "./Cart/CartDrawer";
import { FaCartPlus, FaHome } from "react-icons/fa";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
  Drawer,
} from "flowbite-react";

import { useDispatch, useSelector } from "react-redux";
import {
  handleDrawerClose,
  handleDrawerOpen,
} from "../redux/features/CartDrawerSlice";

const NavbarComp = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Navbar fluid rounded className=" bg-gray-100 mb-5">
        <NavbarBrand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Cart System{" "}
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="/" active>
            <FaHome className="cursor-pointer w-8 h-8" />
          </NavbarLink>
          <FaCartPlus
            className="cursor-pointer w-8 h-8 "
            onClick={() => dispatch(handleDrawerOpen())}
          />
        </NavbarCollapse>
      </Navbar>

      <CartDrawer />
    </>
  );
};

export default NavbarComp;
