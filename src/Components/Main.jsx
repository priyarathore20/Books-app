import React from 'react'
import {HiSearch} from "react-icons/hi"
import Cards from './Cards'

const Main = () => {
  return (
    <>
    <div className='header'>
      <div className="row1">
        <h1>A Room Without Book Is Like <br /> A Body Without Soul.</h1>
      </div>
      <div className="row2">
        <h2>Find your book :</h2>
        <div className="search">
        <input type="text" placeholder='Enter name' />
        <button className="search-btn"><HiSearch className='search-btnn'/></button>
        </div>
        <img src="https://www.pikpng.com/pngl/m/352-3525670_click-here-for-flyer-kids-reading-reading-a.png" alt="#" />
      </div>
          </div>
          <div className="container">
        <Cards/>
      </div>
    </>
  )
}

export default Main