import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../../context/StateProvider";
import { getBasketTotal } from "../../reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  let total = getBasketTotal(basket);
  if (isNaN(total)) {
    console.error("Invalid total calculated:", total);
    total = 0;
  }

  const formattedTotal = new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  }).format(total);

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <strong>{formattedTotal}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button onClick={(e) => navigate("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;