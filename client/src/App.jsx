import React from "react";
import Footer from "./components/Footer";
import { useDispatch } from 'react-redux';
import { Header } from "./components/Header";
import { Outlet } from "./components/Outlet";

const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
