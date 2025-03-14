import React from "react";
import MainRoutes from "../../routes/MainRoutes";
import Header from "./header/Header";
import scss from "./Layout.module.scss";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <main>
        <MainRoutes />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
