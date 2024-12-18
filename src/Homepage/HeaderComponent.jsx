import { siteLogo } from "../../constants/app_constants.json"

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={siteLogo}></img>
      </div>
      <h1 className="app-title">Rocket restaurants 🚀</h1>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>🛒</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;