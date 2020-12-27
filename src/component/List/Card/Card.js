import React, { useState } from "react";
import style from "./card.module.css";
import img from "../../../assets/test.jpg";
import { useHistory } from "react-router-dom";
import * as api from "../../../api/index.js";
import { useDispatch } from "react-redux";
import { likePost, unlikePost } from "../../../actions/postAction";

function Card(props) {
    props = props.post;

    console.log(props);

    const [love, setLove] = useState(
        props.favorite.includes(localStorage.getItem("user"))
    );

    const dispatch = useDispatch();

 
    const handleCardClick = (e) => {
        e.preventDefault();
        // try {
        //     const data = await axios.get("/posts/" + post._id);
        //     console.log(data);
        // } catch (error) {
        //     console.log(error)
        // }
        // history.push(`/posts/${post._id}`)
    };

    const handleHeartClick = async (e) => {
        // e.stopPropagation();

        if (!love) {
            dispatch(likePost(props._id));
        } else {
            dispatch(unlikePost(props._id));
        }
        setLove(!love);
    };

    return (
        <div className={style.card} onClick={handleCardClick}>
            <div className={style.cardPres}>
                <div className={style.cardPrice}>
                    {props.price}
                    <span>/month</span>
                </div>
                <div className={style.cardImg}>
                    <img src={props.image[0]} alt="" />
                </div>
            </div>

            <div className={style.cardBody}>
                <h3 className={style.cardTitle}>{props.title}</h3>

                <p className={style.cardLocation}>
                    {props.no +
                        ", " +
                        props.street +
                        ", " +
                        props.ward +
                        ", " +
                        props.district +
                        ", " +
                        props.city}
                </p>

                <div className={style.cardAme}>
                    <i className="fas fa-bed"></i>
                    <span>{props.room}</span>
                    <i className="fas fa-shower"></i>
                    <span>{/* {props.bathroom} */}</span>
                    <i className="fas fa-house"></i>
                    <span>{props.type}</span>
                </div>

                <div className={style.numLove}>
                    <i className="fas fa-heart"></i>
                    {props.favorite.length}
                </div>

                <div className={style.cardHeart}>
                    <i
                        onClick={handleHeartClick}
                        className={love ? "fas fa-heart" : "far fa-heart"}></i>
                </div>
            </div>
        </div>
    );
}

export default Card;
