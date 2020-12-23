import React, { useState, useEffect } from 'react'
import PostAmenity from './PostAmenity/PostAmenity'
import PostDes from './PostDes/PostDes'
import PostImage from './PostImage/PostImage'
import style from './upload.module.css'

function Upload() {
    const [step, setStep] = useState(0)
    const [post, setPost] = useState({})

    const nextStep = () => {
        setStep(prevStep => prevStep + 1)
    }

    const uploadPost = () => {

    }

    return (
        <div className={style.upload}>
            {step === 0 && <PostDes increaseStep={nextStep} setPost={setPost} />}
            {step === 1 && <PostImage increaseStep={nextStep} setPost={setPost} />}
            {step === 2 && <PostAmenity uploadPost={uploadPost} setPost={setPost} />}
        </div>
    )
}

export default Upload
