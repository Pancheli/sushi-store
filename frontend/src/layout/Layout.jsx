import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthProvider } from '../context/AuthProvider';
import { CartProvider } from '../context/CartProvider';

const Layout = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <Header />

        <main className="d-flex align-items-center justify-content-center w-100 text-center">
          <div className="w-100">
            { children }
          </div>
        </main>

        <Footer />
      </CartProvider>
    </AuthProvider>
  );
};

export default Layout;
