import React from "react";
import { NavLink } from "react-router-dom";

const TabLink = (props) => {
  return (
    <NavLink
      to={props.to}
      end
      className={({ isActive }) =>
        (isActive ? "bg-blue-600 hover:bg-blue-600" : "") +
        "hover:bg-blue-400 flex justify-center items-center px-4 py-2"
      }
    >
      <span className=" text-white">{props.labelContent}</span>
    </NavLink>
  );
};

export default TabLink;
