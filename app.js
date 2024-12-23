import React from "react";
import ReactDOMClient from "react-dom/client";
import Header from "./src/Homepage/Header";
import Footer from "./src/Homepage/Footer";
import Body from "./src/Homepage/Body";
// import Dummy from "./src/Homepage/Dummy";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
/* 
Header
  Logo
  NavItems
    Home
    About us
    Cart

Body
  Search
  Cards
    Ratings
    Image
    Name
    Address
    Distance

Footer
  Copyright
*/

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* <Dummy /> */}
      <Footer />
    </div>
  );
};

root.render(<AppLayout />);
