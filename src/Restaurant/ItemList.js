import React from "react";
import Item from "./Item";

const ItemList = ({ menuItems }) => {
  return menuItems.map((menuItem) => {
    return <Item menuItem={menuItem} />;
  });
};

export default ItemList;
