import { useLocation,useNavigate} from "react-router-dom";
import bookDetailsCss from "./BookDetail.module.css";
import { useDispatch,useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import { addBook } from "../../features/cart/cartSlice";
import type { RootState } from "../../app/store";
import { CartItemType } from "../../types";

export const BookDetail = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const bookInCart = useSelector((state:RootState) => state.cart.bookInCart);
  const bookData = useLocation().state;
  const { title, authors, pageCount, imageLink, description } =
    bookData;

  const clickHandler = () => {
    dispatch(addBook(bookData));
  };

  const buyHandler = () => {
    if(!bookInCart.find((book:CartItemType) => book.data.id === bookData.id)){
      dispatch(addBook(bookData));
    }
    navigate('/cart');
  }

  return (
    <div id={bookDetailsCss.container}>
      <div className={bookDetailsCss.bookImage}>
        <img src={imageLink} alt="book cover" />
      </div>
      <div className={bookDetailsCss.bookContent}>
        <h1>{title}</h1>
        <h3>{authors.join(", ")}</h3>
        <h3>{pageCount} pages</h3>
        <div className={bookDetailsCss.buttonContainer}>
          <button onClick={clickHandler}>Add to Cart</button>
          <button onClick={buyHandler}>Buy Now</button>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
