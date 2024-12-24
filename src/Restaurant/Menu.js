import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { items as dummyItems, dummyResCard } from "./dummyData";
import {
  ITEM_BASE_URL,
  IMG_BASE_URL as imgBaseURL,
} from "../../constants/base_urls";
import { useResMenu } from "../../utils/customHooks";

// .data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[14].card.card.name

const Menu = () => {
  const { resId } = useParams();

  const { menuItems, resCard } = useResMenu({ resId });

  return (
    <div className="menu">
      {resCard != {} ? (
        <div className="menu-title">
          <h1>{resCard.name}</h1>
          <div className="res-open">{"Open - Closes at 9 PM"}</div>
        </div>
      ) : (
        <div className="shimmer-menu-title"></div>
      )}

      {/* Going below this can be a list */}
      <div className="category">
        <h2>Recommended (20)</h2>
        {menuItems.map((menuItem) => {
          return (
            <div key={menuItem.id} className="item-container">
              <div className="item-details">
                <div className="item-detail-header">
                  <div className="item-veg-container">
                    <div
                      className="item-veg"
                      style={
                        menuItem.isVeg
                          ? {
                              background: "#1ae45d",
                              borderColor: "#1ae45d",
                            }
                          : { background: "red", borderColor: "red" }
                      }
                    ></div>
                  </div>
                  <div className="item-title">{menuItem.name}</div>
                </div>
                <div className="item-price">{`INR ${
                  menuItem.price ? menuItem.price / 100 : 250
                }/- ${menuItem.itemAttribute?.portionSize ?? ""}`}</div>
                <div className="item-desc">{menuItem.description}</div>
              </div>
              <div className="item-img-container">
                <img
                  src={ITEM_BASE_URL({ id: menuItem.imageId })}
                  className="item-img"
                  style={!menuItem.inStock ? { filter: "grayscale(100)" } : {}}
                ></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
