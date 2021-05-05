import MainNav from "@app/components/MainNav/MainNav";
import React from "react";
import Footer from "../Footer/Footer";

const BasicLayout: React.FC = ({ children }) => {
  return (
    <div style={{ width: "100%" }}>
      <MainNav />
      {children}
      <Footer />
    </div>
  );
};

export default BasicLayout;
