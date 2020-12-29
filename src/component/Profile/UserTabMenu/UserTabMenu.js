import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import style from './user.tabmenu.module.css'
import { getUser } from '../../../api/host'

function UserTabMenu() {
    const [user, setUser] = useState({})

    useEffect(() => {
        // setUser(getUser())
        setUser({
            name: "Minh"
        })
    }, [])

    return (
        <div className={style.tabMenu}>
            <div className={style.userBrief}>
                <div className={style.userAvatar}>
                    <i className="fas fa-user"></i>
                </div>
                <span>{user.name}</span>
            </div>

            <div className={style.dashboard}>
                <NavLink to="/profile" activeClassName={style.selected} >
                    <i className="fas fa-user"></i>
                    <span>My Profile</span>
                </NavLink>
                <NavLink exact={true} to="/upload" activeClassName={style.selected} >
                    <i className="fas fa-file-plus"></i>
                    <span>Upload</span>
                </NavLink>
                <NavLink exact={true} to="/my_posts" activeClassName={style.selected} >
                    <i className="fas fa-folder"></i>
                    <span>My Post</span>
                </NavLink>
                <NavLink exact={true} to="/favorite" activeClassName={style.selected} >
                    <i className="fas fa-heart"></i>
                    <span>My Favorite</span>
                </NavLink>

            </div>
        </div>
    )
}

export default UserTabMenu
