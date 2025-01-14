import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "../Checkout/CheckoutProduct";

function Order({ order }) {
  const formattedTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "ZAR",
  }).format(order.data.amount / 100);

  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <h3 className="order__total">Order Total: {formattedTotal}</h3>
    </div>
  );
}

export default Order;