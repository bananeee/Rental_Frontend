import React from "react";
// import styles from "./CommentStyle.module.css";

// import image1 from "./images/image1.jpg";
// import image2 from "./images/image2.jpg";
// import image3 from "./images/image3.jpg";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock, faStar, faCalendar } from "@fortawesome/free-solid-svg-icons";

const Comment = () => {
    return (
        <div className={`${styles.container}`}>
            <div>
                <h2>2 Review</h2>
            </div>

            <div className={`${styles.cmt}`}>
                <div className={`${styles.cmt1}`}>
                    <img className={`${styles.image}`} src={image1} alt="" />

                    <div className={`${styles.content}`}>
                        <div>
                            <strong>Diana Cooper</strong>
                            <ul className={`${styles.star}`}>
                                <li>
                                    <FontAwesomeIcon icon={faStar} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faStar} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faStar} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faStar} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faStar} />
                                </li>
                            </ul>
                        </div>

                        <div>
                            <FontAwesomeIcon
                                icon={faCalendar}
                                style={{ marginRight: "10px" }}
                            />
                            Octover 22, 2018
                            <FontAwesomeIcon
                                icon={faClock}
                                style={{
                                    marginRight: "10px",
                                    marginLeft: "10px",
                                }}
                            />
                            5:18 pm
                        </div>

                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quae enim adipisci corrupti consequuntur,
                            delectus, dolorum sed ea soluta, temporibus animi
                            ipsum! Repellendus atque sit nam dolores eos
                            reiciendis veniam odit!
                        </p>
                    </div>
                </div>
                <div className={`${styles.cmt1}`}>
                    <img className={`${styles.image}`} src={image1} alt="" />

                    <div className={`${styles.content}`}>
                        <div>
                            <strong>Diana Cooper</strong>
                            <ul className={`${styles.star}`}>
                                <li>
                                    <FontAwesomeIcon icon={faStar} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faStar} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faStar} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faStar} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faStar} />
                                </li>
                            </ul>
                        </div>

                        <div>
                            <FontAwesomeIcon
                                icon={faCalendar}
                                style={{ marginRight: "10px" }}
                            />
                            Octover 22, 2018
                            <FontAwesomeIcon
                                icon={faClock}
                                style={{
                                    marginRight: "10px",
                                    marginLeft: "10px",
                                }}
                            />
                            5:18 pm
                        </div>

                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quae enim adipisci corrupti consequuntur,
                            delectus, dolorum sed ea soluta, temporibus animi
                            ipsum! Repellendus atque sit nam dolores eos
                            reiciendis veniam odit!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;
