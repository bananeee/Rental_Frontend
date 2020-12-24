import React from 'react'
import CardContainer from '../CardContainer/CardContainer'
import SearchBar from '../SearchBar/SearchBar'
import style from './list.main.module.css'

function ListMain() {
    return (
        <div>
            <SearchBar />
            <CardContainer />
        </div>
    )
}

export default ListMain
