import React from "react";
import ReactDOMClient from "react-dom/client";
import { restaurants } from "./dummy_data_specific.json";
import { imgBaseURL } from "./constants/base_urls.json";
import { starSymbol as star } from "./constants/app_constants.json";

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
  const siteLogo =
    "https://img.freepik.com/premium-vector/delicious-burger-icon-food-beverages_22052-1.jpg";
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
  console.log("imgBaseURL::: ", imgBaseURL);

  const tempResArray = restaurants.map((res) => {
    return {
      title: res.info?.name || "Restaurant name",
      addr: res.info?.locality || "Some dummy address",
      dist: res.info?.sla.slaString,
      img: `${imgBaseURL}${res.info.cloudinaryImageId}`,
      ratings: Math.round(res.info?.avgRating),
    };
  });

  return (
    <div className="res-cards-list">
      {tempResArray.map((res) => {
        return (
          <ResCard
            title={res.title}
            addr={`📍 ${res.addr}`}
            dist={res.dist}
            img={res.img}
            ratings={res.ratings}
          />
        );
      })}
    </div>
  );
};

// This function has wider scope!
const BuildStarString = (ratings) => {
  console.log(ratings);
  const returnString = star.repeat(Math.min(5, ratings));
  console.log(returnString);
  return returnString;
};

const ResCard = ({ title, addr, dist, img, ratings }) => {
  return (
    <div className="res-card">
      <div className="res-card-info">
        <div className="res-card-ratings">
          Ratings: {BuildStarString(ratings)}
        </div>
        <div className="res-card-img-container">
          <img className="res-card-image" alt="res-logo" src={img}></img>
        </div>
        <div className="res-card-title">{title}</div>
      </div>
      <div className="res-card-sla">
        <div className="res-card-addr">{addr}</div>
        <div className="res-card-dist">{dist}</div>
      </div>
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
