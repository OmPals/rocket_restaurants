import React from "react";
import ItemList from "./ItemList";

const Category = ({ id, title, items, showMenuItems, setShowMenuItems }) => {
  const handleAccordianClick = () => {
    showMenuItems ? setShowMenuItems(-1) : setShowMenuItems(id);
  };

  return (
    <div className="category">
      <div
        className="flex justify-between mt-5 cursor-pointer"
        onClick={handleAccordianClick}
      >
        <div className="font-bold">{`${title} (${items?.length})`}</div>
        <button className="mr-2">{showMenuItems ? "🔼" : "🔽"}</button>
      </div>
      {showMenuItems && <ItemList menuItems={items} />}
    </div>
  );
};

export default Category;
