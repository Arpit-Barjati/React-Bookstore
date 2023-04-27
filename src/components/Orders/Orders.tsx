import { useSelector } from "react-redux";
import { Order } from "../Order/Order";
import type { RootState } from "../../app/store";
import { CartItemType } from "../../types";


export const Orders = ():JSX.Element => {
  const orders: CartItemType[] = useSelector((state:RootState) => state.order.orders);
  return (
    <>
      {orders.map((order: CartItemType) => (
        <Order orderData={order} />
      ))}
    </>
  );
}
