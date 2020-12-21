import React from 'react'
import style from './search.module.css'

function SearchBar() {
    return (
        <form className={style.searchBox}>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button></button>
        </form>
    )
}

export default SearchBar
