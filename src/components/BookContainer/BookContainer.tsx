import React, { useEffect } from "react";
import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../Card/Card";
import { addBooks } from "../../features/books/bookSlice";
import { AppDispatch } from "../../app/store";
import bookContainerCss from "./BookContainer.module.css";
import { BookType } from "../../types";

export const BookContainer: React.FC = ():JSX.Element=> {
  const books = useSelector((state: RootState) => state.book.booksData);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (books.length === 0) {
      (async () => {
        const data = await fetch("http://localhost:3000/books");
        const parsedData = await data.json();
        dispatch(addBooks(parsedData));
      })();
    }
  }, [dispatch,books.length]);

  return (
    <div id={bookContainerCss.containerDiv}>
      {books.map((book: BookType) => {
        return <Card key={book.id} bookData={book} />;
      })}
    </div>
  );
};

