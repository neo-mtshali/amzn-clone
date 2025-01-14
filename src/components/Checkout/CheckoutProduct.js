import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../context/StateProvider";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const AMAZON_YELLOW = "#ffa41c";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const renderRatingStars = () => {
    if (typeof rating !== "number" || rating < 0 || rating > 5) {
      console.error("Invalid rating value:", rating);
      return null;
    }

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <StarIcon
          key={`star-full-${i}`}
          className="checkoutProduct__star"
          style={{ color: AMAZON_YELLOW }}
        />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <StarHalfIcon
          key="star-half"
          className="checkoutProduct__star"
          style={{ color: AMAZON_YELLOW }}
        />
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <StarOutlineIcon
          key={`star-empty-${i}`}
          className="checkoutProduct__star"
          style={{ color: AMAZON_YELLOW }}
        />
      );
    }

    return stars;
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>R</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {renderRatingStars()}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket} className="product__button">
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;