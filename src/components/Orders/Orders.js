import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  collection,
  query,
  getDocs,
  orderBy,
} from "firebase/firestore";
import "./Orders.css";
import { useStateValue } from "../../context/StateProvider";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const fetchOrders = async () => {
        const ordersRef = collection(db, "users", user?.uid, "orders");
        const q = query(ordersRef, orderBy("created", "desc"));

        const querySnapshot = await getDocs(q);
        setOrders(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      };

      fetchOrders();
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;