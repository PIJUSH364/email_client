import React from "react";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { Header } from "./components/Header";
import { Outlet } from "./components/Outlet";
import ApplayOut from "./components/ApplayOut";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/navBar/Nav";
import AllDocument from "./components/AllDocument";
import { UploadDocuments } from "./components/UploadDocuments";

const App = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-[url('https://www.mahanadicoal.in/images/pattern/p11.png')]">
      <Nav />
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route path="/upload_doc" element={<UploadDocuments />} />
        <Route path="/show_doc" element={<AllDocument />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
