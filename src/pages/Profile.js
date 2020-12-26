import React, { useEffect } from 'react'
import Nav from '../component/Layout/Nav/Nav'
import PostAmenity from '../component/Profile/Upload/PostAmenity/PostAmenity'
import PostDes from '../component/Profile/Upload/PostDes/PostDes'
import PostImage from '../component/Profile/Upload/PostImage/PostImage'
import Upload from '../component/Profile/Upload/Upload'
import UserFavorite from '../component/Profile/UserFavorite/UserFavorite'
import UserInfo from '../component/Profile/UserInfo/UserInfo'
import UserPost from '../component/Profile/UserPost/UserPost'
import UserTabMenu from '../component/Profile/UserTabMenu/UserTabMenu'

function Profile({ match }) {
    // useEffect(() => {
    //     return () => {
    //     }
    // }, [match])

    const style = {
        display: "flex",
        backgroundColor: "#f7f8f9",
        paddingTop: "8vh",
        backgroundColor: "#4d5567"
    }

    return (
        <div>
            <Nav />
            <div style={style}>
                <UserTabMenu />
                {match.path === '/profile' && <UserInfo />}
                {match.path === '/upload' && <Upload />}
                {match.path === '/my_posts' && <UserPost />}
                {match.path === '/favorite' && <UserFavorite />}       
            </div>
        </div>
    )
}

export default Profile
