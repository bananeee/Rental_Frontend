import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import style from "./card.container.module.css";
import SearchBar from "../SearchBar/SearchBar";
import * as api from "../../../api/index.js";
import { getPosts } from "../../../actions/postAction";
import { useDispatch, useSelector } from "react-redux";

function CardContainer() {
    const dispatch = useDispatch();

    const posts = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(getPosts());
    }, []);

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
