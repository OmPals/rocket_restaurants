import React from "react";
import Item from "./Item";

const ItemList = ({ menuItems }) => {
  return menuItems.map((menuItem, index) => {
    return <Item menuItem={menuItem} key={menuItem.id} index={index} />;
  });
};

export default ItemList;
