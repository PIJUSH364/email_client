import React from "react";
import { Login } from "./auth/Login";
// import SignUp from "./auth/Signup";
import AllDocument from "./components/AllDocument";
import Footer from "./components/Footer";

import Home from "./components/Home";
import { Nav } from "./components/navBar/Nav";
import { UploadDocuments } from "./components/UploadDocuments";
import { useDispatch, useSelector } from 'react-redux';
const App = () => {
  const dispatch = useDispatch();

  
  return (
    <div>

      {/* nav component */}
      <Nav />
      {/* home component */}
      <Home />
      {/* mcl intranet_form */}
      <Login />

      {/* <SignUp /> */}
      {/* upload document */}
      <UploadDocuments />
      {/* document table */}
      <AllDocument />
      {/* mcl intranet_details */}
      {/* footer component */}
      <Footer />

    </div>
  );
};

export default App;
