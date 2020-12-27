import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/postAction";
import style from "./userpost.module.css";

function Item({ post }) {

    const dispatch = useDispatch();

    const handleDelete = (e) => {   
        e.preventDefault();
        dispatch(deletePost(post._id));
    }
    return (
        <tr className={style.itemDetail}>
            <td id="Thumbnail">
                <img src={post.image[0]} alt="Failure" />
            </td>
            <td id="address">
                {post.location.no +
                    ", " +
                    post.location.street +
                    ", " +
                    post.location.ward +
                    ", " +
                    post.location.district +
                    ", " +
                    post.location.city}
            </td>
            <td id="type">{post.type}</td>

            <td id=" price">
                <b>$ {post.price} /month</b>
            </td>

            <td id="Rooms"> {post.numOfRoom}</td>

            <td id="status" className={style.status}>
                {post.pending ? "Published" : "Pending"}
            </td>

            <td id="actions">
                <button>
                    <i className="far fa-pencil-alt"></i>
                </button>
                <button onClick={handleDelete}>
                    <i className="far fa-trash"></i>
                </button>
                <button>
                    <i className="far fa-eye"></i>
                </button>
            </td>
        </tr>
    );
}

export default Item;
