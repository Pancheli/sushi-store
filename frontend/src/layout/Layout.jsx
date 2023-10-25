import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthProvider, useAuthContext } from '../context/AuthProvider';

const Layout = ({ children }) => {
  return (
    <AuthProvider>
        <Header />

        <main className="w-100 text-center h-100">
          { children }
        </main>

        <Footer />
    </AuthProvider>
  );
};

export default Layout;
