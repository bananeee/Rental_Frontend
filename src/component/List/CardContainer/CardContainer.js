import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import style from './card.container.module.css'
import SearchBar from '../SearchBar/SearchBar'

function CardContainer() {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const res = await axios.get('http://localhost:3004/post')
            setPosts(res)
        } catch (error) {
            console.log(error)
        }
    } 

    useEffect(() => {
        getPosts()
        // console.log("Fetch item");
        // let termposts = new Array(12).fill(
        //     {
        //         price: 400,
        //         title: "Hello",
        //         location: "hanoi",
        //         room: 4,
        //         bathroom: 2,
        //         type: "apartment",
        //         love: 100
        //     } 
        // )

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
