import { STAR_SYMBOL as star } from "../../constants/app_constants";

// This function has wider scope!
const BuildStarString = (ratings) =>
  ratings ? star.repeat(Math.min(5, ratings)) : "";

const ResCard = ({ resData }) => {
  const { title, addr, dist, img, ratings } = resData;
  return (
    <div className="res-card">
      <div className="res-card-info">
        <div className="res-card-ratings">
          {ratings ? (
            `Ratings: ${BuildStarString(ratings)}`
          ) : (
            <div className="res-card-text-shimmer"></div>
          )}
        </div>
        <div className="res-card-img-container">
          {img ? (
            <img className="res-card-image" alt="res-logo" src={img}></img>
          ) : (
            <div className="res-card-img-shimmer"></div>
          )}
        </div>
        <div className="res-card-title">
          {title ? title : <div className="res-card-text-shimmer"></div>}
        </div>
      </div>
      <div className="res-card-sla">
        <div className="res-card-addr">
          {addr ? `📍 ${addr}` : <div className="res-card-text-shimmer"></div>}
        </div>
        <div className="res-card-dist">
          {dist ? dist : <div className="res-card-text-shimmer"></div>}
        </div>
      </div>
    </div>
  );
};

export default ResCard;
