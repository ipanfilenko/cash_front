import React, { ReactNode } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./style.module.scss";

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
