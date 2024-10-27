import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import './App.css'
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <NavBar />{" "}
      <main className="font-priary min-h-screen max-w-screen-xl mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
      
    </>
  );
};

export default App;
