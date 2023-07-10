import React, { useState } from 'react'
import {HiSearch} from "react-icons/hi"
import Cards from './Cards'
import axios from 'axios'

const Main = () => {
  const [search, setSearch] = useState("")
  return (
    <>
    <div className='header'>
      <div className="row1">
        <h1>A Room Without Book Is Like <br /> A Body Without Soul.</h1>
      </div>
      <div className="row2">
        <h2>Find your book :</h2>
        <div className="search">
        <input value={search} onChange={e=> setSearch(e.target.value)} type="text" placeholder='Enter name' />
        <button className="search-btn"><HiSearch className='search-btnn'/></button>
        </div>
        <img src="https://assets-global.website-files.com/60e615980cab093e6f2db3c3/60f1c6979e1b269892f46f41_GettyImages-1206750602.jpeg" alt="#" />
      </div>
          </div>
          <div className="container">
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
    </>
  )
}

export default Main