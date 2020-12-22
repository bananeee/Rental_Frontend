import React, { useEffect } from "react";
import style from './comment.module.css'

function Comment({ comment }) {
    
    return (
        <div className={style.commentContainer}>
            <div>
                <div className={style.avatar}>
                    <img src={comment.avatar} alt="" />
                </div>
            </div>
            <div className={style.commentContent}>
                <div className={style.userName}>{comment.userName}</div>
                <div className={style.date}>
                    <i class="fal fa-calendar-alt"></i>
                    {comment.date}
                </div>
                <div className={style.description}>
                    {comment.content}
                </div>
            </div>
        </div>
    );
}

export default Comment;
