import { SITE_LOGO as siteLogo } from "../../constants/app_constants";
import { Link } from "react-router";
import { useOnline } from "../../utils/customHooks";
import { useContext, useState } from "react";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { isOnline } = useOnline();
  const { loggedInUser } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Subscribing to the selector
  const cartItems = useSelector((store) => store.cart.items);

  const handleLoginBtnClick = () => {
    setIsLoggedIn((isLoggedIn) => !isLoggedIn);
  };

  return (
    <div>
      <div
        className="is-online"
        style={{ backgroundColor: isOnline ? "green" : "red" }}
      ></div>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={siteLogo}></img>
        </div>
        <h1 className="app-title">Restaurants 🚀</h1>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li data-testid="cart-btn" className="font-bold px-4 text-xl">
              <Link to="/cart">🛒 {cartItems.length} items</Link>
            </li>
            <li>{loggedInUser}</li>
            <li>
              <button
                onClick={handleLoginBtnClick}
                data-testid="login-btn"
                className="p-2 m-2 border border-black"
              >
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
