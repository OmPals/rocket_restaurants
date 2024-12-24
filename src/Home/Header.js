import { SITE_LOGO as siteLogo } from "../../constants/app_constants";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={siteLogo}></img>
      </div>
      <h1 className="app-title">Rocket restaurants 🚀</h1>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          {/* .data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.category */}
          {/* <li>🛒</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
