import { restaurants } from "../../dummy_data_specific.json";
import { IMG_BASE_URL as imgBaseURL } from "../../constants/base_urls";
import ResCard from "./ResCard";
import { useEffect, useState } from "react";

const ResCardsList = ({ isFilterOn }) => {
  // console.log(isFilterOn);
  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    const tempResArray = restaurants
      .map((res) => {
        return {
          title: res.info?.name || "Restaurant name",
          addr: res.info?.locality || "Some dummy address",
          dist: res.info?.sla.slaString,
          img: `${imgBaseURL}${res.info.cloudinaryImageId}`,
          ratings: Math.round(res.info?.avgRating),
          id: res.info.id,
        };
      })
      .filter((res) => res.ratings > (isFilterOn ? 4 : 0));

    setRestaurantsList(tempResArray);
  }, [isFilterOn]);

  return (
    <div className="res-cards-list">
      {restaurantsList.map((res) => {
        return <ResCard key={res.id} resData={res} />;
      })}
    </div>
  );
};

export default ResCardsList;
