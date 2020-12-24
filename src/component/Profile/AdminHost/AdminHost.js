import React from "react";
import style from "./adminhost.module.css";

function AdminHost() {
    return (
        <div className={style.userPost}>
            <div className={style.container}>
                <div className={style.header}>
                    <h3>Host Approval</h3>
                </div>
                <div className={style.description}>
                    <table>
                        <tr className={style.title}>
                            <th>Avatar</th>
                            <th>Fullname</th>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Phone number</th>
                            <th>Status</th>
                            <th>Actions</th>
                            <th>Approval</th>
                        </tr>
                        <tr className={style.itemDetail}>
                            <td>*image</td>
                            <td>*name</td>
                            <td>1231232</td>
                            <td>sadasds</td>
                            <td>21321312</td>
                            <td className={style.status}>Pending</td>
                            <td>
                                {/* <button><i className="far fa-pencil-alt"></i></button> */}
                                <button>
                                    <i className="far fa-trash"></i>
                                </button>
                                <button>
                                    <i className="far fa-eye"></i>
                                </button>
                            </td>
                            <td className={style.acceptbox}>
                                <input type="checkbox" />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminHost;
