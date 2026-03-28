import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} className="food-item-image" alt={name} />

        {!cartItems[id] ? (
          <img
            className="add"
            src={assets.add_icon_white}
            onClick={() => addToCart(id)}
            alt="add"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="remove"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="add"
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p className="food-item-name">{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>

        <p className="food-item-desc">{description}</p>

        <div className="food-item-bottom">
          <p className="food-item-price">₹{price}</p>
          <button onClick={() => addToCart(id)}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;