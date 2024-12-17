import React from "react";
import ReactDOMClient from "react-dom/client";

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

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/delicious-burger-icon-food-beverages_22052-1.jpg"
        ></img>
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

const Body = () => {
  return (
    <div className="body">
      <Search />
      <ResCardsList />
    </div>
  );
};

const Search = () => {
  return (
    <div className="search-container">
      <input type="text" className="text-input"></input>
      <div>
        <span className="search-icon">🔍</span>
      </div>
    </div>
  );
};

const ResCardsList = () => {
  const tempRes = {
    title: "The Stewery",
    addr: "B-904, Aangan resisdency, Opp Ankur heights, Jahagirpura, Surat - 395009",
    dist: "2.5 km",
  };

  const tempResArray = [
    tempRes,
    tempRes,
    tempRes,
    tempRes,
    tempRes,
    tempRes,
    tempRes,
    tempRes,
    tempRes,
    tempRes,
  ];

  return (
    <div className="res-cards-list">
      {tempResArray.map((res) => {
        return (
          <ResCard title={res.title} addr={res.addr} dist={`📍 ${res.dist}`} />
        );
      })}
    </div>
  );
};

const ResCard = ({ title, addr, dist, img, ratings }) => {
  return (
    <div className="res-card">
      <div className="res-card-ratings">Ratings: ⭐⭐⭐⭐⭐</div>
      <img
        className="res-card-image"
        src="https://media.istockphoto.com/id/160621319/photo/paneer-makhani-soup-sitting-on-a-towel.jpg?s=1024x1024&w=is&k=20&c=z9q-aqMpeYzAuN4u47MTYS1TfEDE0JrpGzLkdkkAk1w="
      ></img>
      <div className="res-card-title">{title}</div>
      <div className="res-card-addr">{addr}</div>
      <div className="res-card-dist">{dist}</div>
    </div>
  );
};

const Footer = () => {
  const footerText = "© Rocket restaurants";
  return <div className="footer">{footerText}</div>;
};

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
