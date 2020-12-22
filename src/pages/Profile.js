import React, { useEffect } from 'react'
import Nav from '../component/Layout/Nav/Nav'
import PostAmenity from '../component/Profile/Upload/PostAmenity/PostAmenity'
import UserInfo from '../component/Profile/UserInfo/UserInfo'
import UserTabMenu from '../component/Profile/UserTabMenu/UserTabMenu'

function Profile({ match }) {
    useEffect(() => {
        console.log(match)
        return () => {
            
        }
    }, [match])

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
                {match.path === '/upload' && <PostAmenity />}
                {match.path === '/my_posts' && <UserInfo />}
                {match.path === '/favorite' && <UserInfo />}
                
            </div>
        </div>
    )
}

export default Profile
