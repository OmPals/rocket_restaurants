import { useEffect, useState } from "react";
import { IMG_BASE_URL as imgBaseURL } from "../../constants/base_urls";
import ResCard from "./ResCard";
import { BACKEND_WITH_DYNAMIC_LAT_LONG } from "../../constants/app_constants";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [location, setLocation] = useState({});

  useEffect(() => {
    const fetchData = async ({ location }) => {
      const resoponse = await fetch(BACKEND_WITH_DYNAMIC_LAT_LONG(location));

      const data = await resoponse.json();

      const restaurants =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

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

      return tempResArray;
    };

    navigator.geolocation.getCurrentPosition(
      (result) => {
        setLocation({
          lat: result.coords.latitude,
          lng: result.coords.longitude,
        });

        fetchData({ location })
          .then((result) => {
            setRestaurantsList(result);
          })
          .catch((err) => console.log("err::", err));
      },
      (err) => console.log("err: ", err)
    );
  }, []);

  const filterBtnOnClick = () =>
    setRestaurantsList(restaurantsList.filter((res) => res.ratings > 4));

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
        {restaurantsList.length > 0
          ? restaurantsList.map((res) => {
              return <ResCard key={res.id} resData={res} />;
            })
          : // <ResCard key={"01"} resData={{}} />
            [
              { id: "01" },
              { id: "02" },
              { id: "03" },
              { id: "04" },
              { id: "05" },
              { id: "06" },
              { id: "07" },
              { id: "08" },
            ].map((res) => {
              return <ResCard key={res.id} resData={res} />;
            })}
      </div>
    </div>
  );
};

export default Body;
