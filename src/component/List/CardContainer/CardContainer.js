import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import style from './card.container.module.css'
import SearchBar from '../SearchBar/SearchBar'

function CardContainer() {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const res = await axios.get('/post')
            setPosts(res.data)
        } catch (error) {
            console.log(error)
        }
    } 

    useEffect(() => {
        getPosts()

    }, [])

    return (
        <div style={{ backgroundColor: "#f7f8f9" }}>
            <SearchBar />
            <div className={style.cardContainer}>
                {posts.map((post, key) => <Card post={post} key={key} />)}
            </div>
        </div>

    )
}

export default CardContainer
