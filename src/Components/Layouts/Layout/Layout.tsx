import React, { FC, ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
