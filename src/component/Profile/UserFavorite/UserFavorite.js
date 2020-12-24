import React from 'react'
import style from "./userfavorite.module.css"
import CardContainer from "../../List/CardContainer/CardContainer"
function UserFavorite() {
    return (
        <div className={style.userFavorite}>
            <div className={style.title}>
                <h2>My Favorite</h2>
            </div>
            <div className={style.container}>
                <CardContainer/>
            </div>
        </div>
    )
}

export default UserFavorite
