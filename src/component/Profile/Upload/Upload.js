import React, { useState, useEffect } from 'react'
import PostAmenity from './PostAmenity/PostAmenity'
import PostDes from './PostDes/PostDes'
import PostImage from './PostImage/PostImage'
import style from './upload.module.css'

function Upload() {
    const [step, setStep] = useState(0)
    const [post, setPost] = useState({})

    const nextStep = () => {
        console.log(post)
        setStep(prevStep => prevStep + 1)
    }

    const uploadPost = () => {
        console.log(post)
    }

    return (
        <div className={style.upload}>
            {step === 0 && <PostDes increaseStep={nextStep} setPost={setPost} post={post} />}
            {step === 1 && <PostImage increaseStep={nextStep} setPost={setPost} post={post} />}
            {step === 2 && <PostAmenity uploadPost={uploadPost} setPost={setPost} post={post} />}
        </div>
    )
}

export default Upload
