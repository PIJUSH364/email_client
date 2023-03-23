import React from "react";
import { useSelector } from "react-redux";
import { Login } from "../auth/Login";
import { SignUp } from "../auth/SignUp";
import AllDocument from "./AllDocument";
import Home from "./Home";
import { UploadDocuments } from "./UploadDocuments";

export const Outlet = () => {
  const logIngStatus = useSelector((state) => state.user.authStatus);
  return (
    <div class=" ">
      {/* home component */}
      <Home />
      {/* mcl intranet_form */}
      <Login />
      <SignUp />
      {logIngStatus && <AllDocument />}
    </div>
  );
};
