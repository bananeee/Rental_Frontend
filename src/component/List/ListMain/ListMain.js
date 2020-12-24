import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardContainer from '../CardContainer/CardContainer'
import SearchBar from '../SearchBar/SearchBar'
import style from './list.main.module.css'



function ListMain() {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const res = await axios.get('/posts')

            console.log(res.data.post);

            setPosts([
                ...res.data.post
            ])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])


    return (
        <div>
            <SearchBar />

            <CardContainer posts={posts} />
        </div>
    )
}

export default ListMain
