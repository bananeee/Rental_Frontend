import {
    FETCH_ALL,
    CREATE,
    UPDATE,
    DELETE,
    LIKE,
    UNLIKE,
    CLICK,
    FAVOR_POST,
    MYPOSTS
} from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getPosts = () => async (dispatch) => {
    try {
        const data = await api.getPosts();

        dispatch({ type: FETCH_ALL, payload: data.post });
    } catch (error) {
        console.log(error.message);
    }
};

export const getFavorPosts = (id) => async (dispatch) => {
    try {
        const data = await api.getFavorPosts(id);
        dispatch({ type: FAVOR_POST, payload: data.posts });
    } catch (error) {
        console.log(error.message);
    }
};

export const getMyPosts = (id) => async (dispatch) => {
    try {
        const data = await api.getMyPosts(id);
        dispatch({ type: MYPOSTS, payload: data.posts });
    } catch (error) {
        console.log(error.message);
    }
};

export const getAPost = (id) => async (dispatch) => {
    try {
        const data = await api.getAPost(id);
        console.log(data.posts);
        dispatch({ type: CLICK, payload: data.posts});
    } catch (error) {
        console.log(error.message)
        
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const data = await api.createPost(post);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const data = await api.updatePost(id, post);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const likePost = (id) => async (dispatch) => {
    try {
        const data = await api.likePost(id);
        dispatch({ type: LIKE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const unlikePost = (id) => async (dispatch) => {
    try {
        const data = await api.unlikePost(id);
        dispatch({ type: UNLIKE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};



// export const deletePost = (id) => async (dispatch) => {
//   try {
//     await await api.deletePost(id);

//     dispatch({ type: DELETE, payload: id });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
