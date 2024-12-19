import { restaurants } from "../../dummy_data_specific.json";
import { IMG_BASE_URL as imgBaseURL } from "../../constants/base_urls";
import ResCard from "./ResCard";

const ResCardsList = () => {
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

  return (
    <div className="res-cards-list">
      {tempResArray.map((res) => {
        return <ResCard key={res.id} resData={res} />;
      })}
    </div>
  );
};

export default ResCardsList;
