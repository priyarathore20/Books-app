import React, { useState } from "react";
import Modal from "./Modal";

const Cards = ({ Book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  console.log(Book);
  return (
    <>
      {Book.map((item, key) => {
        key = item.id;
        let title = item.volumeInfo?.title;
        let thumbnail =
          item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
        let price =
          item.saleInfo.saleability === "FOR_SALE"
            ? item.saleInfo.listPrice.amount
            : item.saleInfo.saleability;
        return (
          <div
            className="card"
            onClick={() => {
              setShow(true);
              setItem(item);
            }}
          >
            <img src={thumbnail} alt={thumbnail ? "#" : "No image available"} />
            <div>
              <h3 className="title">{title}</h3>
              <p className="amount">&#8377; {price}</p>
            </div>
            <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
          </div>
        );
      })}
    </>
  );
};

export default Cards;
