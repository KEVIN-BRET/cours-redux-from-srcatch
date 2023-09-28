const initialState = {}

export default function postReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_POSTS":
			return action.payload;
		case "ADD_POST":
			return [action.payload, ...state]; // On ajoute le contenu du payload au State (qu'on déstructure)
		default:
			return state;
	}
}