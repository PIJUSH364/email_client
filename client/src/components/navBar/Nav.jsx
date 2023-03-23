import React, { useEffect, useState } from "react";
import { authItem, publicItem } from "../../controller/navItem";
import { Link, unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isAuth } from "../../controller/userDeatils";
export const Nav = () => {
  const [authStatus, setAuthStatus] = useState(!false);
  const logIngStatus = useSelector((state) => state.user.authStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {}, [logIngStatus]);

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
        {!logIngStatus &&
          publicItem.map((item, key) => (
            <Link to={item?.link} key={key} className="menuItem text-white">
              <li>{item.title}</li>
            </Link>
          ))}
        {logIngStatus && (
          <>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/show_doc"}>
              <li>Documentation section</li>
            </Link>

            <Link to={"/upload_doc"}>
              <li>Upload Document</li>
            </Link>

            <li>change password</li>
            <li>search docs</li>
            <Link
              onClick={(e) => {
                e.preventDefault();
                setAuthStatus(!authStatus);
                dispatch(isAuth(!isAuth));
              }}
              to={"/"}
              className="menuItem text-white"
            >
              <li
                onClick={() => {
                  navigate("/");
                  dispatch(isAuth(false));
                }}
              >
                log out
              </li>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};
