import React from "react";
import ReactDOMClient from "react-dom/client";
import Header from "./src/Home/Header";
import Footer from "./src/Home/Footer";
import Body from "./src/Home/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./src/About/About";
import Error from "./src/Error/error";
import Menu from "./src/Restaurant/Menu";

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
      <Outlet />
      {/* <Body /> */}
      {/* <Dummy /> */}
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        path: "/",
        Component: Body,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/restaurant/:resId",
        Component: Menu,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);

// root.render(<AppLayout />);
