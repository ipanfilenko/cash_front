import React, { ReactNode } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
