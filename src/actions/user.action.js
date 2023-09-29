import axios from "axios"; // Importation de la bibliothèque axios, utilisée pour faire des requêtes HTTP.

// Définition des types d'actions, qui servent à identifier quelles actions sont dispatchées vers les reducers.
export const GET_USER = "GET_USER";
export const ADD_USER_LIKE = "ADD_USER_LIKE";

// Action pour récupérer les informations d'un utilisateur depuis notre API.
export const getUser = () => {
	return (dispatch) => { // La fonction retourne une autre fonction qui prend 'dispatch' comme argument.
		// On effectue une requête GET pour récupérer les informations de l'utilisateur.
		return axios.get("http://localhost:3000/user").then((res) => {
			// Une fois les données reçues, on dispatche une action avec les données de l'utilisateur.
			// Ici, on prend le premier élément du tableau avec res.data[0], supposant que l'API renvoie un tableau.
			dispatch({ type: GET_USER, payload: res.data[0] });
		});
	};
};

// Action pour ajouter un like à l'utilisateur.
export const addUserLike = (data) => {
	return (dispatch) => {
		// On effectue une requête PUT pour mettre à jour les informations de l'utilisateur (augmenter son nombre de likes, par exemple).
		return axios.put(`http://localhost:3000/user/${data.id}`, data).then((res) => {
			// Après avoir mis à jour l'utilisateur, on dispatche une action avec les données mises à jour.
			dispatch({ type: ADD_USER_LIKE, payload: data });
		});
	};
};
