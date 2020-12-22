import React from "react";

function Comment() {
    return (
        <div className={styles.container}>
            <div>
                <h2>2 Review</h2>
            </div>

            <div className={styles.cmt}>
                <div className={styles.cmt1}>
                    <img className={styles.image} src={image1} alt="" />

                    <div className={styles.content}>
                        <div>
                            <strong>Diana Cooper</strong>
                            
                        </div>

                        <div>
                            
                            Octover 22, 2018
                            
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
                <div className={styles.cmt1}>
                    <img className={styles.image} src={image1} alt="" />

                    <div className={styles.content}>
                        <div>
                            <strong>Diana Cooper</strong>
                            
                        </div>

                        <div>
                            
                            Octover 22, 2018
                            
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
}

export default Comment;
