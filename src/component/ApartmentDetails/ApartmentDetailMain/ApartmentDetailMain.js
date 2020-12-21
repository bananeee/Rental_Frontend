import React, { useState, useEffect } from 'react'
import SlideShow from '../SlideShow/SlideShow'
import axios from "axios";
import style from './apartmentdetail.main.module.css'

function ApartmentDetailMain({ match }) {

    const [post, setPost] = useState({})
    const [host, setHost] = useState({})

    const getData = async () => {
        await axios.get(`http://localhost:3004/post/${match.params}`)
            .then(res => {
                setPost(res.data)
            })
            .catch(err => console.log(err))
        axios.get(`http://localhost:3004/host/${post.host}`)
            .then(res => {
                setHost(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <main>
            <SlideShow />
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.contentTitle}>
                        <div>
                            <div className={style.breadcrumb}>
                                Home {">"} {post.type}  {">"} {post.title}
                            </div>
                            <div className={style.title}>
                                {post.title}
                            </div>
                            <div className={style.location}>
                                {post.location}
                            </div>
                        </div>
                        <div className={style.avatar}>
                            <img src={host.image} alt=""/>
                        </div>
                    </div>
                    <div className={style.presDes}>
                        
                    </div> 
                </div>
            </div>
        </main>
    )
}

export default ApartmentDetailMain
