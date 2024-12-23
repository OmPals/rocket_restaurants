import { useEffect, useState } from "react";
import { IMG_BASE_URL as imgBaseURL } from "../../constants/base_urls";
import ResCard from "./ResCard";
import {
  BACKEND_WITH_DYNAMIC_LAT_LONG,
  DEBOUNCE_TIMEOUT_SEARCH,
} from "../../constants/app_constants";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [location, setLocation] = useState({});
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const fetchData = async ({ location }) => {
      // This makes a network call.
      const resoponse = await fetch(BACKEND_WITH_DYNAMIC_LAT_LONG(location));

      // This parses a readable stream till the end.
      const data = await resoponse.json();

      // Both of the above are promises and will be dependent on the browser's callback queue.
      // Which is why, this is being awaited.
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
            setSearchList(result.map(() => true));
          })
          .catch((err) => console.log("err::", err));
      },
      (err) => console.log("err: ", err)
    );
  }, []);

  const filterBtnOnClick = () =>
    setRestaurantsList(restaurantsList.filter((res) => res.ratings > 4));

  const searchBtnOnKeyUp = () => {
    if (searchText == "") {
      setSearchList(restaurantsList.map(() => true));
    } else {
      setSearchList(
        restaurantsList.map((item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="body">
      <div className="search-container">
        <button className="filter-btn" onClick={filterBtnOnClick}>
          🏆 filter top restaurants 🏆
        </button>
        <input
          type="text"
          className="search-component"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button onClick={searchBtnOnKeyUp}>Search</button>
        <div>
          <span className="search-icon">🔍</span>
        </div>
      </div>
      <div className="res-cards-list">
        {restaurantsList.length > 0
          ? restaurantsList
              .filter((res, index) => searchList[index])
              .map((res) => {
                return <ResCard key={res.id} resData={res} />;
              })
          : [
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
