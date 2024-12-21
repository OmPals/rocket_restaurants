import { useState } from "react";
import { restaurants } from "../../dummy_data_specific.json";
import { IMG_BASE_URL as imgBaseURL } from "../../constants/base_urls";
import ResCard from "./ResCard";

const Body = () => {
  const tempResArray = restaurants.map((res) => {
    return {
      title: res.info?.name || "Restaurant name",
      addr: res.info?.locality || "Some dummy address",
      dist: res.info?.sla.slaString,
      img: `${imgBaseURL}${res.info.cloudinaryImageId}`,
      ratings: Math.round(res.info?.avgRating),
      id: res.info.id,
    };
  });
  const [restaurantsList, setRestaurantsList] = useState(tempResArray);

  const filterBtnOnClick = () =>
    setRestaurantsList(tempResArray.filter((res) => res.ratings > 4));

  return (
    <div className="body">
      <div className="search-container">
        <button className="filter-btn" onClick={filterBtnOnClick}>
          🏆 filter top restaurants 🏆
        </button>
        <div>
          <span className="search-icon">🔍</span>
        </div>
      </div>
      <div className="res-cards-list">
        {restaurantsList.map((res) => {
          return <ResCard key={res.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
