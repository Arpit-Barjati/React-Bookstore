import { useDispatch } from "react-redux";
import { addBook, removeBook } from "../../features/cart/cartSlice";
import cartItemCss from "./CartItem.module.css";
import { AppDispatch } from "../../app/store";
import { CartItemType } from "../../types";

type LocalCartType = {
  bookData: CartItemType
}

export const CartItem = ({ bookData }: LocalCartType):JSX.Element => {
  const dispatch:AppDispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(addBook(bookData.data));
  };
  const decrementHandler = () => {
    dispatch(removeBook(bookData));
  };
  return (
    <div className={cartItemCss.container}>
      <div>{bookData.data.title}</div>
      <div className={cartItemCss.buttonContainer}>
        <button className={cartItemCss.buttons} onClick={decrementHandler}>
          ➖
        </button>
        {bookData.count}
        <button className={cartItemCss.buttons} onClick={incrementHandler}>
          ➕
        </button>
      </div>
    </div>
  );
}
