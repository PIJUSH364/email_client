import React from "react";
import { publicItem } from "../../controller/navItem";

export const Nav = () => {
  return (
    <div className="bg-black text-white flex_box common-container items-center justify-between">
      <div className=" flex_box gap-10">
        {/* logo */}
        <img
          className="w-44  "
          src={"https://www.coalindia.in/static/images/logo.png"}
          alt="logo"
        />
        {/* menu items */}
        <ul className="flex_box items-center gap-6 text-[1.2rem] capitalize font-[500] tracking-wide">
          {publicItem.map((item, key) => (
            <li key={key} className="menuItem">
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      {/* responsive icon */}
      <i className="fa-solid fa-bars"></i>
      {/* 
      <i class="fa-solid fa-xmark"></i> */}
    </div>
  );
};
