import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import style from "./card.container.module.css";
import SearchBar from "../SearchBar/SearchBar";

function CardContainer({ posts }) {
    // const [posts, setPosts] = useState([])

    // const getPosts = async () => {
    //     try {
    //         const res = await axios.get('/posts')

    //         console.log(res);
    //         // setPosts([
    //         //     ...res
    //         // ]

    //         // )
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     getPosts()
    // }, [])

    return (
        <div style={{ backgroundColor: "#f7f8f9" }}>
            <div className={style.cardContainer}>
                {posts.map((post, key) => (
                    <Card post={post} key={key} />
                ))}
            </div>
        </div>
    );
}

export default CardContainer;
