// import Header from "../components/Header";
import React from "react";
const LandingPage: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      {/* <Header cta="Buy now" /> */}
      {children}
    </>
  );
};

export default LandingPage;
