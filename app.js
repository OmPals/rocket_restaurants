import React from "react";
import ReactDOMClient from "react-dom/client";
import Header from "./src/Homepage/HeaderComponent";
import Footer from "./src/Homepage/FooterComponent";
import Body from "./src/Homepage/BodyComponent";

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
      <Footer />
    </div>
  );
};

root.render(<AppLayout />);
