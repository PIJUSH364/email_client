import React from "react";
import { Login } from "./auth/Login";
import { SignUp } from "./auth/Signup";
import Home from "./components/Home";
import { Nav } from "./components/navBar/Nav";

const App = () => {
  return (
    <div>
      {/* nav component */}
      <Nav />
      {/* home component */}
      <Home />
      {/* mcl intranet_form */}
      <Login />
      <SignUp />
      {/* mcl intranet_details */}
      {/* footer component */}
    </div>
  );
};

export default App;
