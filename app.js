import React, { lazy, Suspense, useState } from "react";
import ReactDOMClient from "react-dom/client";
import Header from "./src/Home/Header";
import Footer from "./src/Home/Footer";
import Body from "./src/Home/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Error from "./src/Error/error";
import Menu from "./src/Restaurant/Menu";
import Loading from "./src/Loading/Loading";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./src/Cart/Cart";

const About = lazy(() => import("./src/About/About"));

const SuspendComponent = ({ Component }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
};

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
  const [loggedInUser, setLoggedInUser] = useState("Om Palsanawala");
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="app">
          <Header />
          <Outlet />
          {/* <Footer /> */}
        </div>
      </UserContext.Provider>
    </Provider>
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
        Component: () => <SuspendComponent Component={About} />,
      },
      {
        path: "/restaurant/:resId",
        Component: Menu,
      },
      {
        path: "/cart",
        Component: Cart,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
