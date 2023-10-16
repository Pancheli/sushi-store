import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className="w-100 img-back text-center">
      {children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
