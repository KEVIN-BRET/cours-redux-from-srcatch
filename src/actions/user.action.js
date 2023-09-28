import axios from "axios";


// Mes types d'action :
export const GET_USER = "GET_USER";

// Mes actions :
export const getUser = () => {
	return (dispatch) => {
		return axios.get("http://localhost:3000/user").then((res) => {
			dispatch({ type: GET_USER, payload: res.data[0] });
		})
	}
}

