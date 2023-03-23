import React from "react";
import { Login } from "../auth/Login";
import { SignUp } from "../auth/SignUp";
import AllDocument from "./AllDocument";
import Home from "./Home";
import { UploadDocuments } from "./UploadDocuments";

export const Outlet = () => {
  return (
    <div class=" ">
      {/* home component */}
      <Home />
      {/* mcl intranet_form */}
      <Login />
      <SignUp />
    </div>
  );
};
