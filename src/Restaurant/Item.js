import { useDispatch } from "react-redux";
import { addItem } from "../../utils/Slices/cartSlice";

const Item = ({ menuItem }) => {
  const dispatch = useDispatch();

  const handleAddItem = (menuItem) => {
    dispatch(addItem(menuItem));
  };

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
          <div className="item-title">{menuItem.title}</div>
        </div>
        <div className="item-price">{`₹ ${
          menuItem.price ? menuItem.price / 100 : 250
        }/-`}</div>
        <div className="item-desc">{menuItem.description}</div>
      </div>
      <div className="item-img-container">
        <button
          onClick={() => handleAddItem(menuItem)}
          className="border border-black rounded-lg bg-green-400 absolute top-0 right-0"
        >
          + Add
        </button>
        <img
          src={menuItem.img}
          className="item-img"
          // style={!menuItem.inStock ? { filter: "grayscale(100)" } : {}}
        ></img>
      </div>
    </div>
  );
};

export default Item;
