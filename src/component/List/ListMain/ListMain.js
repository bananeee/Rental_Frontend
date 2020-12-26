import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../actions/postAction";
import CardContainer from "../CardContainer/CardContainer";
import SearchBar from "../SearchBar/SearchBar";
import style from "./list.main.module.css";


function ListMain() {
   
    const dispatch = useDispatch();

    const posts = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return (
        <div>
            <SearchBar />
            <CardContainer posts = { posts }/>
        </div>
    );
}

export default ListMain;
