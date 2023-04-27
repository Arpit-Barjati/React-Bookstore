import React from "react";
import ordersCss from "./Orders.module.css";
import { CartItemType } from "../../types";

type OrderDataType = {
  orderData : CartItemType
}

export const Order = ({ orderData }: OrderDataType):JSX.Element => {
  const date = new Date().toDateString();
  const {imageLink,title,authors,price} = orderData.data;
  return (
    <div className={ordersCss.ordersContainer}>
      <div className={ordersCss.orderHeader}>
        <p>Order placed : {date}</p>
        <p>Status: delivered</p>
      </div>
      <div>
        <img
          src={
            imageLink
          }
          alt="book-cover"
        />
        <div className={ordersCss.orderContent}>
          <h2>{title}</h2>
          <p>{authors.join(", ")}</p>
          <p>{price}</p>
          <p>Quantity: {orderData.count}</p>
        </div>
      </div>
    </div>
  );
}
