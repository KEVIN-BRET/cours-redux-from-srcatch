// Importation des types d'actions depuis le fichier "user.action".
import { ADD_USER_LIKE, GET_USER } from "../actions/user.action";

// Initialisation de l'état initial du reducer à un objet vide.
const initialState = {};

// Fonction userReducer pour gérer les actions liées à l'utilisateur.
export default function userReducer(state = initialState, action) {
    // Utilisation d'un switch pour déterminer quel type d'action est reçu.
    switch (action.type) {
        // En cas de récupération des informations de l'utilisateur.
        case GET_USER:
            // Retourne directement les informations de l'utilisateur récupérées.
            return action.payload;

        // En cas d'ajout d'un "like" par l'utilisateur.
        case ADD_USER_LIKE:
            // Retourne une copie de l'état actuel avec le nombre de "likes" mis à jour.
            return {
                ...state,
                likes: action.payload.likes,
            };

        // Si aucune action correspondante n'est trouvée.
        default:
            // Retourne l'état actuel sans le modifier.
            return state;
    }
}
