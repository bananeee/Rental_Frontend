import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import style from "./card.container.module.css";
import SearchBar from "../SearchBar/SearchBar";
import * as api from "../../../api/index.js";
import { getAPost, getPosts } from "../../../actions/postAction";
import { useDispatch, useSelector } from "react-redux";

function CardContainer() {
    const posts = useSelector((state) => state.posts);
    // console.log(posts);
    
    return (
        <div style={{ backgroundColor: "#f7f8f9" }}>
            <div className={style.cardContainer}>
                {posts.map((post, key) => (
                    <Card
                        post={post}
                        key={key}
                    />
                ))}
            </div>
        </div>
    );
}

export default CardContainer;
