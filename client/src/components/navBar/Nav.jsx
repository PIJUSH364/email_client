import React, { useState } from "react";
import { authItem, publicItem } from "../../controller/navItem";
import {

  Link,

} from "react-router-dom";
export const Nav = () => {
  const [authStatus, setAuthStatus] = useState(false);


  return (
    <div className="bg-black text-white flex_box common-container items-center justify-between">
      {/* logo */}
      <Link to="/">
        <img
          className="w-44  "
          src={"https://www.coalindia.in/static/images/logo.png"}
          alt="logo"
        />
      </Link>

      {/* menu items */}
      <ul className="flex_box items-center gap-6 text-[1.2rem] capitalize font-[500] tracking-wide">
        {authStatus ? null : publicItem.map((item, key) => (
          <Link
            to={item?.link}
            key={key} className="menuItem text-white">
            <li>
              {item.title}
            </li>
          </Link>
        ))}
        {authStatus && (
          <>
            <Link
              to={"/"}
              className="menuItem text-white">
              <li>
                all Documentation
              </li>
            </Link>
            <Link
              to={"/"}
              className="menuItem text-white">
              <li>
                Upload Document
              </li>
            </Link>
            <Link
              onClick={(e) => {
                e.preventDefault();
                setAuthStatus(!authStatus)
              }}
              to={"/"}
              className="menuItem text-white">
              <li>
                log out
              </li>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};
