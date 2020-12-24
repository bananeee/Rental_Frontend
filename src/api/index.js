import axios from "axios";

const Headers = {
    headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
    },
};

// user
export const renterlogin = async (loginData) => {
    try {
        const response = await axios.post("auth/renter/login", loginData);
        return response.data;    
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const hostlogin = async (loginData) => {
    try {
        const response = await axios.post("auth/host/login", loginData);
        return response.data;    
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const renterRegister = async (registerData) => {
    try {
        const response = await axios.post("auth/renter/register", registerData);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const hostRegister = async (registerData) => {
    try {
        const response = await axios.post("auth/host/register", registerData);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

// post
export const getPosts = async () => {
    try {
        const response = await axios.get("/posts");
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getAPost = async (id) => {
    try {
        const response = await axios.get(`/posts/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const createPost = async (data) => {

    try {
        const response = await axios.post("/posts", data, Headers);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export const updatePost = async (id) => {
    try {
        const response = await axios.put(`/posts/${id}`, Headers);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const commentPost = async (id, data) => {
    try {
        
        const response = await  axios.put(`/posts/comment/${id}`, data, Headers);
    } catch (error) {
        console.log(error);
        return null;
        
    }
}

export const likePost = async (id) => {
    try {
        const response = await axios.put(`/posts/like/${id}`, {}, Headers);
    } catch (error) {
        console.log(error);
        return null;
        
    }
}

export const unlikePost = async (id) => {
    try {
        const response = await axios.put(`/posts/unlike/${id}`, {}, Headers);
    } catch (error) {
        console.log(error);
        return null
    }
}