import axios from "axios";
import React, { useState, useEffect } from "react";
import PostAmenity from "./PostAmenity/PostAmenity";
import PostDes from "./PostDes/PostDes";
import PostImage from "./PostImage/PostImage";
import style from "./upload.module.css";
import * as api from "../../../api/index.js";
import Card from "../../List/Card/Card.js";
import { useSelector } from "react-redux";

function Upload({ id }) {
    const [step, setStep] = useState(0);

    const [post, setPost] = useState({
        image: [
            "https://www.level10martialarts.com/wp-content/uploads/2017/04/default-image.jpg",
        ],
        favorite: [],
        pending: false,
        title: "Title",
        no: "No",
        street: "street",
        ward: "ward",
        district: "district",
        city: "city",
        nearby: "",
        type: "",
        numOfRoom: 0,
        price: 0,
        size: 0,
        ownerType: "",
        kitchen: "",
        water: 0,
        otherAmenity: "",
        postedBy: {
            username: "",
            phoneNumber: "",
        },
        comments: [],
    });

    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const preStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    return (
        <div className={style.upload}>
            {step === 0 && (
                <PostDes
                    increaseStep={nextStep}
                    setPost={setPost}
                    post={post}
                    id={id}
                />
            )}
            {step === 1 && (
                <PostImage
                    increaseStep={nextStep}
                    decreaseStep={preStep}
                    setPost={setPost}
                    post={post}
                    id={id}
                />
            )}
            {step === 2 && (
                <PostAmenity
                    setPost={setPost}
                    decreaseStep={preStep}
                    post={post}
                    id={id}
                />
            )}

            <div className={style.preview}>
                <Card post={post} />
            </div>
        </div>
    );
}

export default Upload;
