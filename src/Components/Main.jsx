import React, { useState } from 'react'
import {HiSearch} from "react-icons/hi"
import Cards from './Cards'
import axios from 'axios'

const Main = () => {
  const [search, setSearch] = useState("")
  const [bookData, setBookData] = useState([])
 
 const handleSearch = async() => {
try {
  const res = await axios.get(' https://www.googleapis.com/books/v1/volumes?q=' +search+ '&key=AIzaSyBTA3n1X3cfcXMDWulL8pWLKIoVhpoL3Og'+'&maxResults=40')
  setBookData(res.data.items)
} catch (error) {
  console.log("error")
}  
 }
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
        <button className="search-btn" onClick={handleSearch}><HiSearch className='search-btnn'/></button>
        </div>
        <img src="https://assets-global.website-files.com/60e615980cab093e6f2db3c3/60f1c6979e1b269892f46f41_GettyImages-1206750602.jpeg" alt="#" />
      </div>
    </div>
    <div className="container">
        {<Cards Book={bookData}/>}
    </div>
    </>
  )
}

export default Main