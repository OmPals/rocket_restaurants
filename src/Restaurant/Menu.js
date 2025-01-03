import { useState } from "react";
import { useParams } from "react-router";
import { useResMenu, useResMenuAccordian } from "../../utils/customHooks";
import Item from "./ItemList";
import Category from "./Category";

const Menu = () => {
  const [showMenuItems, setShowMenuItems] = useState(false);

  const { resId } = useParams();
  const { categories, resCard } = useResMenuAccordian({ resId });

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
      {categories.map((menu, index) => {
        return (
          <Category
            key={menu.category.id}
            id={menu.category.id}
            title={menu.category.title}
            items={menu.items}
            showMenuItems={showMenuItems === menu.category.id}
            setShowMenuItems={(id) => {
              setShowMenuItems(id);
            }}
          />
        );
      })}
    </div>
  );
};

export default Menu;
