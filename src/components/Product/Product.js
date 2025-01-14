import React from "react";
import "./Product.css";
import { useStateValue } from "../../context/StateProvider";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const renderRatingStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={`star-full-${i}`} className="product__star" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalfIcon key="star-half" className="product__star" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<StarOutlineIcon key={`star-empty-${i}`} className="product__star" />);
    }

    return stars;
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>R</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {renderRatingStars()}
          <span>({rating})</span>
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;