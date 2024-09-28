import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[50vh] text-white">
      <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
