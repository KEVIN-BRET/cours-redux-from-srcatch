import axios from "axios";


// Mes types d'action :
export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";

// Mes actions :
export const getPosts = () => {
	return (dispatch) => {
		return axios.get("http://localhost:3000/posts").then((res) => {
			dispatch({ type: GET_POSTS, payload: res.data });
		});
	};
};

export const addPost = (data) => {
	return (dispatch) => {
		return axios.post("http://localhost:3000/posts", data).then((res) => {
			dispatch({ type: ADD_POST, payload: data });
		});
	};
};

