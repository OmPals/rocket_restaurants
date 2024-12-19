import { STAR_SYMBOL as star } from "../../constants/app_constants";

// This function has wider scope!
const BuildStarString = (ratings) => star.repeat(Math.min(5, ratings));

const ResCard = ({ resData }) => {
  const { title, addr, dist, img, ratings } = resData;
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
        <div className="res-card-addr">{`📍 ${addr}`}</div>
        <div className="res-card-dist">{dist}</div>
      </div>
    </div>
  );
};

export default ResCard;
