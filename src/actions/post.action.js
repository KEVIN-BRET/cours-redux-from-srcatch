import axios from "axios"; // Import de la bibliothèque axios pour faire des requêtes HTTP.

// Définition des types d'actions pour identifier les actions dans nos reducers.
export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_POST_LIKE = "ADD_POST_LIKE";

// Action pour récupérer tous les posts depuis notre API.
export const getPosts = () => {
	return (dispatch) => { // Cette fonction retourne une autre fonction qui prend 'dispatch' comme argument.
		// On fait une requête GET pour récupérer les posts.
		return axios.get("http://localhost:3000/posts").then((res) => {
			// Une fois les données reçues, on dispatche une action avec les données.
			dispatch({ type: GET_POSTS, payload: res.data });
		});
	};
};

// Action pour ajouter un nouveau post.
export const addPost = (data) => {
	return (dispatch) => {
		// On fait une requête POST pour ajouter un post.
		return axios.post("http://localhost:3000/posts", data).then((res) => {
			// Après avoir ajouté le post, on dispatche une action avec les données du post.
			dispatch({ type: ADD_POST, payload: data });
		});
	};
};

// Action pour modifier un post existant.
export const editPost = (data) => {
	return (dispatch) => {
		// On fait une requête PUT pour mettre à jour le post.
		return axios.put(`http://localhost:3000/posts/${data.id}`, data).then((res) => {
			// Après avoir modifié le post, on dispatche une action avec les données mises à jour.
			dispatch({ type: EDIT_POST, payload: data });
		});
	};
};

// Action pour supprimer un post.
export const deletePost = (postId) => {
	return (dispatch) => {
		// On fait une requête DELETE pour supprimer le post.
		return axios.delete(`http://localhost:3000/posts/${postId}`).then((res) => {
			// Après avoir supprimé le post, on dispatche une action avec l'ID du post supprimé.
			dispatch({ type: DELETE_POST, payload: postId });
		});
	};
};

// Action pour ajouter un like à un post.
export const addPostLike = (data) => {
	return (dispatch) => {
		// On fait une requête PUT pour mettre à jour le post (augmenter le nombre de likes).
		return axios.put(`http://localhost:3000/posts/${data.id}`, data).then((res) => {
			// Après avoir augmenté le nombre de likes du post, on dispatche une action avec les données du post.
			dispatch({ type: ADD_POST_LIKE, payload: data });
		});
	};
};
