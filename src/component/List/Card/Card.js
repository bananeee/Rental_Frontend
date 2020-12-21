import React, { useState } from 'react'
import style from './card.module.css'
import img from '../../../assets/test.jpg'

function Card({ post }) {

    const [love, setLove] = useState(false)

    // useEffect(() => {
    //     setLove(post.love)
    // }, [])

    return (
        <div className={style.card}>
            <div className={style.cardPres}>
                <div className={style.cardPrice}>
                    {post.price}
                </div>
                <div className={style.cardImg}>
                    <img src={post.image[0]} alt="" />
                </div>
            </div>
            <div className={style.cardBody}>
                <h3 className={style.cardTitle}>{post.title}</h3>
                <p className={style.cardLocation}>{post.location}</p>
                <div className={style.cardAme}>
                    <i className="fal fa-bed-empty"></i>
                    <p>{post.room}</p>
                    <i className="fal fa-shower"></i>
                    <p>{post.bathroom}</p>
                    <i className="fal fa-house"></i>
                    <p>{post.type}</p>
                </div>
                <div className={style.numLove}>
                    <i className="fas fa-heart"></i>{post.love}
                </div>
                <div className={style.cardHeart}>
                    <i onClick={() => setLove(!love)} className={love ? 'fas fa-heart' : 'far fa-heart'}></i>
                </div>
            </div>
        </div>
    )
}

export default Card
