import { useState } from "react";
import ResCard from "./ResCard";
import { Link } from "react-router";
import { useCurrLocation, useResList } from "../../utils/customHooks";

const Body = () => {
  const { currLocation } = useCurrLocation();
  const { restaurantsList, searchList, setSearchList } = useResList({
    currLocation,
  });

  const [searchText, setSearchText] = useState("");

  const filterBtnOnClick = () => {
    setSearchList(restaurantsList.map((res) => res.ratings > 4));
  };
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
                return (
                  <Link
                    key={res.id}
                    to={`/restaurant/${res.id}`}
                    props={{ title: res.title }}
                  >
                    <ResCard resData={res} />
                  </Link>
                );
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
