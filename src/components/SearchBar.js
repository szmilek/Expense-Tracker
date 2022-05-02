import React, {useContext} from "react";
import AppContext from "../context/AppContext";
import {useState} from "react";

const SearchBar = () => {

    const {handleSearch} = useContext(AppContext);

    return(
       <>
           <input
            placeholder="Search..."
            onChange={handleSearch}>
           </input>
       </>
    )
}

export default SearchBar;