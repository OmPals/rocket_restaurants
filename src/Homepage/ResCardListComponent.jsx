import { restaurants } from "../../dummy_data_specific.json";
import { imgBaseURL } from "../../constants/base_urls.json";
import ResCard from "./ResCard";

const ResCardsList = () => {
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
        return <ResCard resData={res} />;
      })}
    </div>
  );
};

export default ResCardsList;
