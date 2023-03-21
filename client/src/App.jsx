import React from "react";
import { Login } from "./auth/Login";
import SignUp from "./auth/Signup";
import AllDocument from "./components/AllDocument";
import Footer from "./components/Footer";

import Home from "./components/Home";
import { Nav } from "./components/navBar/Nav";
import { UploadDocuments } from "./components/UploadDocuments";

const App = () => {
  return (
    <div>
      {/* nav component */}
      <Nav />
      {/* home component */}
      {/* <Home /> */}
      {/* mcl intranet_form */}
      {/* <Login />

      <SignUp /> */}
      {/* upload document */}
      {/* <UploadDocuments /> */}
      {/* document table */}
      <AllDocument />
      {/* mcl intranet_details */}
      {/* footer component */}
      <Footer />
    </div>
  );
};

export default App;
