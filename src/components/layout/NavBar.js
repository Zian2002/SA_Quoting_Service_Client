import React from "react";
import { Outlet } from "react-router-dom";
import TabLink from "./TabLink";

const NavBar = () => {
  return (
    <div className="flex flex-col ">
      <header>
        create or implement header
        <div className="flex bg-blue-500 items-center justify-center">
          <TabLink to="/" labelContent="Home"></TabLink>
          <TabLink to="/sell" labelContent="Sell"></TabLink>
          <TabLink to="/about" labelContent="About"></TabLink>
          <TabLink to="/faqs" labelContent="FAQs"></TabLink>
        </div>
      </header>
      <Outlet />
    </div>
  );
};


export default NavBar;
