import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "../Restaurant/ItemList";
import { clearCart } from "../../utils/Slices/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="m-auto w-6/12">
      {items.length > 0 ? (
        <button
          className="border border-black bg-red-500 rounded-lg"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
      ) : (
        "The cart is empty. Order food going to some Restauratns from Home page"
      )}
      <ItemList menuItems={items} />{" "}
    </div>
  );
};

export default Cart;
