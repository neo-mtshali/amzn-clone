import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../../context/StateProvider";
import { getBasketTotal } from "../../reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  const formattedTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(getBasketTotal(basket));

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <strong>{formattedTotal}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;