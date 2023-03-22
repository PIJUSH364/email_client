import React from "react";
import Footer from "./components/Footer";
import { useDispatch } from 'react-redux';
import { Header } from "./components/Header";
import { Outlet } from "./components/Outlet";
import ApplayOut from "./components/ApplayOut";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/navBar/Nav";
import AllDocument from "./components/AllDocument";

const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Nav />
      <AllDocument />
      <Routes>
        <Route path="/" element={<Outlet />}>
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
