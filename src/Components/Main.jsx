import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import Cards from "./Cards";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        " https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&key=AIzaSyBTA3n1X3cfcXMDWulL8pWLKIoVhpoL3Og" +
          "&maxResults=40"
      );
      setBookData(res.data.items);
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1 className="head-1">
            " The more that you read, the more things you will know. The more
            that you learn, the more places you'll go."
          </h1>
        </div>
        <div className="row2">
          <h2>Find your book :</h2>
          <form onSubmit={handleSearch} className="search">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Enter name"
            />
            <button type="submit" className="search-btn" onClick={handleSearch}>
              <HiSearch className="search-btnn" />
            </button>
          </form>
        </div>
      </div>
      <div className="container">{<Cards Book={bookData} />}</div>
    </>
  );
};

export default Main;
