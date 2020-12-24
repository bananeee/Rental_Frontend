import React, { useState } from 'react'
import style from './card.module.css'
import img from '../../../assets/test.jpg'
import { useHistory } from 'react-router-dom'

function Card({ post }) {

    const [love, setLove] = useState(false)
    const history = useHistory()
    // useEffect(() => {
    //     setLove(post.love)
    // }, [])

    const handleCardClick = () => {
        history.push(`/posts/${post.id}`)
    }

    const handleHeartClick = (e) => {
        e.stopPropagation()
        setLove(!love)
    }


    return (
        <div className={style.card} onClick={handleCardClick}>
            <div className={style.cardPres}>
                <div className={style.cardPrice}>
                    {post.price}<span>/month</span>
                </div>
                <div className={style.cardImg}>
                    <img src={post.image[0]} alt="" />
                </div>
            </div>
            <div className={style.cardBody}>
                <h3 className={style.cardTitle}>{post.title}</h3>
                <p className={style.cardLocation}>{post.location}</p>
                <div className={style.cardAme}>
                    <i className="fas fa-bed"></i>
                    <span>{post.room}</span>
                    <i className="fas fa-shower"></i>
                    <span>{post.bathroom}</span>
                    <i className="fas fa-house"></i>
                    <span>{post.type}</span>
                </div>
                <div className={style.numLove}>
                    <i className="fas fa-heart"></i>{post.love}
                </div>
                <div className={style.cardHeart}>

                    <i onClick={handleHeartClick} className={love ? 'fas fa-heart' : 'far fa-heart'}></i>
                </div>
            </div>
        </div>
    )
}

export default Card
