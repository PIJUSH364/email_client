import React from "react";

export const Nav = () => {
  return (
    <div className="bg-black text-white flex_box common-container items-center">
      <div className=" flex_box ">
        {/* logo */}
        <img
          className="w-44"
          src={"https://www.coalindia.in/static/images/logo.png"}
          alt="logo"
        />
        {/* menu items */}
        <ul className="flex_box items-center gap-6 text-xl capitalize font-semibold tracking-wider">
          <li>home</li>
          <li>about</li>
          <li>careers</li>
          <li>contactUs</li>
        </ul>
      </div>

      {/* responsive icon */}
      <i class="fa-solid fa-bars"></i>
      {/* 
      <i class="fa-solid fa-xmark"></i> */}
    </div>
  );
};
