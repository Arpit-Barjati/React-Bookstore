import React from "react";
import cardCss from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { BookType } from "../../types";

type CardItem = {
  bookData: BookType;
};

export const Card: React.FC<CardItem> = ({ bookData }):JSX.Element => {
  const { description, imageLink, title, id } = bookData;
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`/books/${id}`, {
      state: {
        ...bookData,
      },
    });
  };

  return (
    <div className={cardCss.bookCard}>
      <div>
      <img className={cardCss.bookImage} src={imageLink} alt="book-cover"/>
      <div className={cardCss.bookCardContent}>
        <h2>{title}</h2>
        <p className={cardCss.description}>{description}</p>
      </div>
      </div>
      <button onClick={() => handleClick(id)} className={cardCss.button}>
        Explore
      </button>
    </div>
  );
};
