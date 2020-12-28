import axios from 'axios'
import React, { useState, useEffect } from 'react'
import PostAmenity from './PostAmenity/PostAmenity'
import PostDes from './PostDes/PostDes'
import PostImage from './PostImage/PostImage'
import style from './upload.module.css'
import * as api from "../../../api/index.js";

function Upload({ id }) {
    const [step, setStep] = useState(0)
    const [post, setPost] = useState({
        image: [],
    })

    const nextStep = () => {
        setStep(prevStep => prevStep + 1)
    }

    return (
        <div className={style.upload}>
            {step === 0 && <PostDes increaseStep={nextStep} setPost={setPost} post={post} id={id} />}
            {step === 1 && <PostImage increaseStep={nextStep} setPost={setPost} post={post} id={id} />}
            {step === 2 && <PostAmenity setPost={setPost} post={post} id={id} />}
        </div>
    )
}

export default Upload
