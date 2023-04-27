import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { CartItem } from "../CartItem/CartItem";
import cartCss from "./Cart.module.css";
import { Form } from "../Form/Form";
import { newOrder } from "../../features/orders/orderSlice";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../features/cart/cartSlice";
import { CartItemType } from "../../types";

export const Cart = ():JSX.Element => {
  const booksInCart = useSelector((state: RootState) => state.cart.bookInCart);
  const dispatch:AppDispatch = useDispatch();
  const navigate = useNavigate();
  console.log(booksInCart);

  let totalPrice = Math.round(booksInCart.reduce((sum:number,current:CartItemType)=>{
    return sum + (+current.data.price)*(+current.count);
  },0));

  const handleCheckout = ()=>{
    dispatch(newOrder(booksInCart));
    navigate('/order');
    dispatch(clearCart());
  }

  const cancelHandler = ()=>{
    dispatch(clearCart());
  }

  return (
    <div className={cartCss.container}>
      <div className={cartCss.formContainer}>
        <Form />
      </div>
      <div className={cartCss.checkoutDetailsContainer}>
        <h2>Selected Books</h2>
        <div className={cartCss.booksContainer}>
          {booksInCart.length !== 0
            ? booksInCart.map((book: CartItemType) => <CartItem key={book.data.id} bookData={book} />)
            : "Select books you like"}
        </div>
        <h2>Payment Info</h2>
        <div className={cartCss.paymentInfoContainer}>
          <div>
            <p>Item price</p>
            <p>{totalPrice}</p>
          </div>
          <div>
            <p>Tax</p>
            <p>{(totalPrice*0.05).toFixed(2)}</p>
          </div>
          <div>
            <p>Shipping charges</p>
            <p>{totalPrice?75:0}</p>
          </div>
          <hr/>
          <div>
            <p>Total price</p>
            <p>{totalPrice?(75+totalPrice*1.05 ).toFixed(2):0}</p>
          </div>
        </div>
        <div className={cartCss.buttonContainer}>
          <button onClick={handleCheckout}>Checkout</button>
          <button onClick={cancelHandler}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
