"use client"

import { useState } from 'react'
import React from 'react'
import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
   const[manufacturer,setMenufacturer] = useState('');

    const handleSearch = () => {}

  return (

    <form className='searchbar' onSubmit={handleSearch}>

        <div className='searchbar__item'>
            <SearchManufacturer
            manufacturer = {manufacturer}
            setManufacturer = {setMenufacturer}
            
            />


        </div>

    </form>
  )
}

export default SearchBar
