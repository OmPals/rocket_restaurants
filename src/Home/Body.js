import { useContext, useState } from "react";
import ResCard, { withEnhancementsResCard } from "./ResCard";
import { Link } from "react-router";
import { useCurrLocation, useResList } from "../../utils/customHooks";
import UserContext from "../../utils/UserContext";

const Body = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const { currLocation } = useCurrLocation();
  const { restaurantsList, searchList, setSearchList } = useResList({
    currLocation,
  });

  const [searchText, setSearchText] = useState("");

  // Higher order component
  const ResCardEnhanced = withEnhancementsResCard(ResCard);

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

  const handleUserNameChange = (e) => {
    setLoggedInUser(e.target.value);
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
          data-testid="search-input"
        ></input>
        <button data-testid="search-btn" onClick={searchBtnOnKeyUp}>Search</button>
        <div>
          <span className="search-icon">🔍</span>
        </div>
        <div>
          <input
            type="text"
            value={loggedInUser}
            className="border border-black p-2"
            onChange={handleUserNameChange}
          />
        </div>
      </div>
      <div className="res-cards-list" data-testid="res-cards-list">
        {restaurantsList.length > 0
          ? restaurantsList
              .filter((res, index) => searchList[index])
              .map((res) => {
                return (
                  <Link
                    key={res.id}
                    // to={`/restaurant/accordian/${res.id}`}
                    to={`/restaurant/${res.id}`}
                    props={{ title: res.title }}
                  >
                    {res.veg ? (
                      <ResCardEnhanced resData={res} />
                    ) : (
                      <ResCard resData={res} />
                    )}
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
