import React from "react";
import style from "./userpost.module.css";

function UserPost() {
    return (
        <div className={style.userPost}>
            <div className={style.container}>
                <div className={style.header}>
                    <h3>Manage</h3>
                    <div className={style.selector}>
                        <button>All</button>
                        <button>Published</button>
                        <button>Pending</button>
                    </div>
                </div>
                <div className={style.description}>
                    <table>
                        <tr className={style.title}>
                            <th>Thumbnail</th>
                            <th>Address</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Rooms</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        <tr className={style.itemDetail}>
                            <td>*image</td>
                            <td>
                                <b>Long</b>
                                <br/>
                                *addess
                            </td>
                            <td>Apartment</td>
                            <td><b>$100/month</b></td>
                            <td>2</td>
                            <td className={style.status}>Published</td>
                            <td>
                                <button><i className="far fa-pencil-alt"></i></button>
                                <button><i className="far fa-trash"></i></button>
                                <button><i className="far fa-eye"></i></button>
                            </td>
                        </tr>
                        <tr className={style.itemDetail}>
                            <td>*image</td>
                            <td>
                                <b>Long</b>
                                <br/>
                                *addess
                            </td>
                            <td>Apartment</td>
                            <td><b>$100/month</b></td>
                            <td>2</td>
                            <td className={style.status}>Published</td>
                            <td>
                                <button><i className="far fa-pencil-alt"></i></button>
                                <button><i className="far fa-trash"></i></button>
                                <button><i className="far fa-eye"></i></button>
                            </td>
                        </tr>


                    </table>
                </div>
            </div>
        </div>
    );
}

export default UserPost;
