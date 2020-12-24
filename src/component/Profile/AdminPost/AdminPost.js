import React from "react";
import style from "./adminpost.module.css";

function AdminPost() {
    return (
        <div className={style.userPost}>
            <div className={style.container}>
                <div className={style.header}>
                    <h3>Post approval</h3>
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
                            <th>Approval</th>
                        </tr>
                        <tr className={style.itemDetail}>
                            <td>*image</td>
                            <td>
                                *address
                            </td>
                            <td>Apartment</td>
                            <td><b>$100/month</b></td>
                            <td>2</td>
                            <td className={style.status}>Pending</td>
                            <td>
                                {/* <button><i className="far fa-pencil-alt"></i></button> */}
                                <button><i className="far fa-trash"></i></button>
                                <button><i className="far fa-eye"></i></button>
                            </td>
                            <td className={style.acceptbox}>
                                <input type="checkbox"/>
                            </td>
                        </tr>
                        <tr className={style.itemDetail}>
                            <td>*image</td>
                            <td>
                                *address
                            </td>
                            <td>Apartment</td>
                            <td><b>$100/month</b></td>
                            <td>2</td>
                            <td className={style.status}>Published</td>
                            <td>
                                {/* <button><i className="far fa-pencil-alt"></i></button> */}
                                <button><i className="far fa-trash"></i></button>
                                <button><i className="far fa-eye"></i></button>
                            </td>
                            <td className={style.acceptbox}>
                                <input type="checkbox"/>
                            </td>
                        </tr>


                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminPost;
