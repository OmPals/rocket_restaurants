import React from "react";
import Item from "./Item";

const ItemList = ({ menuItems }) => {
  return menuItems.map((menuItem) => {
    return <Item menuItem={menuItem} key={menuItem.id} />;
  });
};

export default ItemList;
