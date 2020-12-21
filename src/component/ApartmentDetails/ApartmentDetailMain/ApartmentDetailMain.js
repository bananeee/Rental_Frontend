import React, { useState, useEffect } from 'react'
import SlideShow from '../SlideShow/SlideShow'
import axios from "axios";
import style from './apartmentdetail.main.module.css'

function ApartmentDetailMain({ id }) {

    const [post, setPost] = useState({})
    const [host, setHost] = useState({})

    useEffect(() => {
        const getPostData = async () => {
            try {
                const resPost = await axios.get(`http://localhost:3004/post/${id}`)
                setPost(resPost.data)
                console.log(resPost.data)
            } catch (error) {
                console.log(error)
            }
        }
        getPostData()
    }, [])

    useEffect(() => {
        const getHostData = async () => {
            try {
                const resHost = await axios.get(`http://localhost:3004/host/${post.host}`)
                setHost(resHost.data)
            } catch (error) {
                console.log(error)
            }
        }
        if (post)
            getHostData(post)
    }, [post])

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
                                <h2>{post.title}</h2>
                            </div>
                            <div className={style.location}>
                                {post.location}
                            </div>
                        </div>
                        <div className={style.avatar}>
                            <img src={host.image} alt="" />
                        </div>
                    </div>
                    <div className={style.presDes}>
                        <div>
                            <i className="fas fa-home-alt"></i>
                            <span>Price</span>
                            <span>{post.price}</span>
                        </div>
                        <div>
                            <i className="fas fa-home-alt"></i>
                            <span>Type</span>
                            <span>{post.type}</span>
                        </div>
                        <div>
                            <i className="fas fa-home-alt"></i>
                            <span>Size</span>
                            <span>{post.size}</span>
                        </div>
                        <div>
                            <i className="fas fa-home-alt"></i>
                            <span>Room</span>
                            <span>{post.room}</span>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default ApartmentDetailMain
