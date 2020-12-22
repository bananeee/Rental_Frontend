import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel"
import SlideShow from "../SlideShow/SlideShow";
import style from "./apartmentdetail.main.module.css";
import Comment from "../Comment/Comment";

function ApartmentDetailMain({ id }) {
    const [post, setPost] = useState({
        image: []
    });
    const [host, setHost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getPostData = async () => {
            try {
                const resPost = await axios.get(`/post/${id}`)
                const resHost = await axios.get(`/host/${resPost.data.host}`)
                const resComment = await axios.get(`/comment?postId=${id}`)
                // console.log(resComment.data)
                setPost(resPost.data)
                setHost(resHost.data)
                setComments(resComment.data)
                console.log(post)
            } catch (error) {
                console.log(error);
            }
        }
        getPostData()
    }, [])

    // useEffect(() => {
    //     const getHostData = async () => {
    //         try {
    //             const resHost = await axios.get(`/host/${post.host}`);
    //             setHost(resHost.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     if (post) getHostData(post);
    // }, [post]);

    // useEffect(() => {
    //     const getCommentData = async () => {
    //         try {
    //             const resComments = await axios.get(`/comment/${post.id}`);
    //             setComments(resComments.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     if (post) getCommentData(post);
    // }, [post]);

    return (
        <main className={style.detailMain}>
            <Carousel indicators="true">
                {post.image.map((src, key) =>
                    // <Carousel.Item key={key}>
                    //     <img
                    //         className={style.image}
                    //         src={src}
                    //         alt="First slide"
                    //     />
                    //     <Carousel.Caption>
                    //         <h3>First slide label</h3>
                    //         <p>
                    //             Nulla vitae elit libero, a pharetra augue mollis
                    //             interdum.
                    //     </p>
                    //     </Carousel.Caption>
                    // </Carousel.Item>
                    <Carousel.Item key={key}>
                        <img
                            className={style.image}
                            src={src}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
            </Carousel>

            {/* <div className={style.container}>
                <div className={style.content}>
                    <div>
                        <div className={style.contentTitle}>
                            <div>
                                <div className={style.breadcrumb}>
                                    Home {">"} {post.type} {">"} {post.title}
                                </div>
                                <div className={style.title}>{post.title}</div>
                                <div className={style.location}>
                                    {post.location}
                                </div>
                            </div>
                            <div className={style.avatar}>
                                <img src={host.image} alt="" />
                            </div>
                        </div>
                        <div className={style.presDes}>
                            <div className={style.noBorderLeft}>
                                <i className="fa fa-usd-circle"></i>
                                <span>Price</span>
                                <b>{post.price}</b>
                            </div>
                            <div className={style.noBorderLeft}>
                                <i className="fas fa-home-alt"></i>
                                <span>Type</span>
                                <b>{post.type}</b>
                            </div>
                            <div className={style.noBorderLeft}>
                                <i className="fas fa-square"></i>
                                <span>Size</span>
                                <b>{post.size}</b>
                            </div>
                            <div className={style.noBorderLeft}>
                                <i className="fas fa-warehouse-alt"></i>
                                <span>Room</span>
                                <b>{post.room}</b>
                            </div>
                        </div>
                        <div className={style.description}>
                            <header>
                                <h2>About this listing</h2>
                            </header>
                            <div className={style.paragraph}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Morbi est quam, volutpat et arcu eu, pharetra
                                congue augue. Integer vel nibh eu eros interdum
                                commodo. Vivamus finibus fringilla libero, id
                                consectetur purus sollicitudin vel. Proin dapibus
                                ante et pharetra luctus. Ut lacinia ante ut nunc
                                pellentesque auctor. Proin laoreet erat sed ornare
                                molestie. Fusce vehicula ut nulla facilisis
                                vulputate. Quisque vel purus ac lectus tempus
                                viverra. Maecenas at sem at erat pellentesque
                                hendrerit nec in massa. Vestibulum nec lacinia dui,
                                a congue ex. Vivamus ac ultri
                        </div>
                        </div>

                        <div className={style.detail}>
                            <div className={style.detailTitle}>Details</div>
                            <ul className={style.detailList}>
                                <li>
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                    ></i>
                                ID:
                                <b>123</b>
                                </li>
                                <li>
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                    ></i>
                                ID:
                                <b>123</b>
                                </li>
                                <li>
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                    ></i>
                                ID:
                                <b>123</b>
                                </li>
                                <li>
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                    ></i>
                                ID:
                                <b>123</b>
                                </li>
                                <li>
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                    ></i>
                                ID:
                                <b>123</b>
                                </li>
                                <li>
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                    ></i>
                                ID:
                                <b>123</b>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.commentContainer}>
                        <h2>Review</h2>
                        {comments.map((comment, key) => <Comment key={key} comment={comment} />)}
                    </div>
                </div>
            </div> */}
        </main>
    );
}

export default ApartmentDetailMain;
