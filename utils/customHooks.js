import { useState, useEffect } from "react";
import { items as dummyItems, dummyResCard } from "../src/Restaurant/dummyData";
import { BACKEND_WITH_DYNAMIC_LAT_LONG } from "../constants/app_constants";
import { IMG_BASE_URL as imgBaseURL } from "../constants/base_urls";

export const useCurrLocation = () => {
  const [currLocation, setCurrLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (result) => {
        setCurrLocation({
          lat: result.coords.latitude,
          lng: result.coords.longitude,
        });
      },
      (err) => console.log("err: ", err)
    );

    return () => {
      setCurrLocation({ lat: 0, lng: 0 });
    };
  }, []);
  console.log("currLocation::: ", currLocation);
  return { currLocation };
};

export const useResList = ({ currLocation }) => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    const fetchData = async ({ currLocation }) => {
      // This makes a network call.
      const resoponse = await fetch(
        BACKEND_WITH_DYNAMIC_LAT_LONG(currLocation)
      );

      // This parses a readable stream till the end.
      const data = await resoponse.json();

      console.log("data::: ", data);
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

      setRestaurantsList(tempResArray);
      setSearchList(tempResArray.map(() => true));
    };

    if (currLocation.lat != 0) {
      fetchData({ currLocation });
    }

    return () => {
      setRestaurantsList([]);
    };
  }, [currLocation]);
  console.log(restaurantsList);

  return { restaurantsList, searchList, setSearchList };
};

export const useResMenu = ({ resId }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [resCard, setResCard] = useState({});

  useEffect(() => {
    fetchData({ resId });
  }, []);

  const fetchData = async ({ resId }) => {
    // const response = await fetch(
    //   `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.2509731&lng=72.7954159&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    // );

    // const data = await response.json();

    // console.log(data);

    // const menuItems =
    //   data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
    //     (card) => card?.card?.info
    //   );

    // const lastCard =
    //   data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.slice(
    //     -1
    //   )[0];
    // const resCardObj = lastCard?.card?.card;

    // console.log(menuItems);

    // comment the below code amd uncomment the api data behaviour
    const menuItems = dummyItems.map((item) => item.card.info);
    const resCardObj = dummyResCard.card.card;

    setMenuItems(menuItems);
    setResCard(resCardObj);
  };

  return { menuItems, resCard };
};
