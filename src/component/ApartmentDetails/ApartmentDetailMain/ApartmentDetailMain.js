import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./apartmentdetail.main.module.css";
import Comment from "../Comment/Comment";
import Slider from "react-slick";
import LightBox from "../LightBox/LightBox";
import { useDispatch, useSelector } from "react-redux";
import { getAPost, likePost, unlikePost } from "../../../actions/postAction";

import * as api from "../../../api/index.js";

function ApartmentDetailMain({ id }) {
    const dispatch = useDispatch();

    let posts = useSelector((state) => state.posts);

    const [love, setLove] = useState(
        posts[0].favorite.includes(localStorage.getItem("user"))
    );

    useEffect(() => {
        dispatch(getAPost(id));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        accessibility: true,
        // centerMode: true,
        // centerPadding: '100px',
    };

    const handleHeartClick = async (e) => {
        e.preventDefault();

        if (!love) {
            dispatch(likePost(id));
        } else {
            dispatch(unlikePost(id));
        }
        setLove(!love);
    };

    return (
        <main className={style.detailMain}>
            {console.log(love)}
            <div className={style.carousel}>
                <Slider {...settings}>
                    {posts[0].image.map((im, key) => (
                        <div className={style.displayItem}>
                            <div key={key}>
                                <img src={im} alt="" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className={style.container}>
                <div className={style.content}>
                    <div>
                        <div className={style.contentTitle}>
                            <div>
                                <div className={style.breadcrumb}>
                                    <a href="/">Home</a>
                                    {" > "}
                                    <a href="#">{posts[0].type}</a>
                                    {" > "}
                                    <a href="#">{posts[0].title}</a>
                                </div>

                                <div className={style.title}>
                                    {posts[0].title}
                                </div>
                                {posts[0].no +
                                    ", " +
                                    posts[0].street +
                                    ", " +
                                    posts[0].ward +
                                    ", " +
                                    posts[0].district +
                                    ", " +
                                    posts[0].city}
                            </div>
                            {/* <div className={style.avatar}>
                                 <img src={host.image} alt="" /> 
                            </div> */}
                        </div>
                        <div className={style.presDes}>
                            <div className={style.noBorderLeft}>
                                <i className="fa fa-usd-circle"></i>
                                <span>Price</span>
                                <b>{posts[0].price}</b>
                            </div>

                            <div className={style.noBorderLeft}>
                                <i className="fas fa-home-alt"></i>
                                <span>Type</span>
                                <b>{posts[0].type}</b>
                            </div>

                            <div className={style.noBorderLeft}>
                                <i className="fas fa-square"></i>
                                <span>Size</span>
                                <b>{posts[0].size}</b>
                            </div>

                            <div className={style.noBorderLeft}>
                                <i className="fas fa-warehouse-alt"></i>
                                <span>Room</span>
                                <b>{posts[0].numOfRoom}</b>
                            </div>
                        </div>

                        <div className={style.description}>
                            <header>
                                <h2>About this listing</h2>
                            </header>
                            <div className={style.paragraph}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi est quam, volutpat et
                                arcu eu, pharetra congue augue. Integer vel nibh
                                eu eros interdum commodo. Vivamus finibus
                                fringilla libero, id consectetur purus
                                sollicitudin vel. Proin dapibus ante et pharetra
                                luctus. Ut lacinia ante ut nunc pellentesque
                                auctor. Proin laoreet erat sed ornare molestie.
                                Fusce vehicula ut nulla facilisis vulputate.
                                Quisque vel purus ac lectus tempus viverra.
                                Maecenas at sem at erat pellentesque hendrerit
                                nec in massa. Vestibulum nec lacinia dui, a
                                congue ex. Vivamus ac ultri
                            </div>
                        </div>

                        <div className={style.detail}>
                            <div className={style.detailTitle}>Details</div>
                            <ul className={style.detailList}>
                                <li>
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"></i>
                                    ID:
                                    <b>123</b>
                                </li>
                                <li>
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"></i>
                                    ID:
                                    <b>123</b>
                                </li>
                                <li>
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"></i>
                                    ID:
                                    <b>123</b>
                                </li>
                                <li>
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"></i>
                                    ID:
                                    <b>123</b>
                                </li>
                                <li>
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"></i>
                                    ID:
                                    <b>123</b>
                                </li>
                                <li>
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"></i>
                                    ID:
                                    <b>123</b>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <LightBox />
                    <div className={style.commentContainer}>
                        <h2>Review</h2>
                        {posts[0].comments.map((comment, key) => (
                            <Comment key={key} comment={comment} />
                        ))}
                    </div>
                </div>

                <div className={style.forms}>
                    <div className={style.above}>
                        <div className={style.formsTitle}>
                            <h2>Contact</h2>
                        </div>

                        <div className={style.formBody}>
                            <div className={style.pricesAreas}>
                                <div>
                                    <i className="fa fa-money-bill-wave"></i>
                                    <sup>$</sup>
                                    {posts[0].price}
                                    <sub>/month</sub>
                                </div>

                                <div>
                                    <i className="fa fa-chart-area"></i>
                                    {posts[0].size}m<sup>2</sup>
                                </div>
                            </div>

                            <div className={style.name}>
                                <i className="fa fa-user"></i>
                                Host: {posts[0].postedBy.username}
                            </div>

                            <div className={style.phone}>
                                <i className="fa fa-phone"></i>
                                Phone: {posts[0].postedBy.phoneNumber}
                            </div>

                            <div>
                                <i className="fa fa-info-circle"></i>
                                You can contact to host
                            </div>
                        </div>
                    </div>
                    <div className={style.bottom} onClick={handleHeartClick}>
                        <div>
                            <i className="fa fa-heart"></i>
                            Add to Favorite
                        </div>
                    </div>

                    <div className={style.listIcons}>
                        <div className={style.icons}>
                            <i className="fab fa-twitter"></i>
                        </div>

                        <div className={style.icons}>
                            <i className="fab fa-facebook-f"></i>
                        </div>

                        <div className={style.icons}>
                            <i className="fa fa-envelope"></i>
                        </div>

                        <div className={style.icons}>
                            <i className="fab fa-youtube"></i>
                        </div>

                        <div className={style.icons}>
                            <i className="fab fa-instagram-square"></i>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ApartmentDetailMain;
