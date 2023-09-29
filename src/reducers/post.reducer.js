// Import des types d'actions depuis le fichier "post.action".
import { ADD_POST, ADD_POST_LIKE, DELETE_POST, EDIT_POST, GET_POSTS } from "../actions/post.action";

// Initialisation de l'état initial du reducer à un objet vide.
const initialState = {};

// Fonction postReducer pour gérer les actions liées aux posts.
export default function postReducer(state = initialState, action) {
    // On utilise un switch pour déterminer quel type d'action est reçu.
    switch (action.type) {
        // En cas de récupération des posts.
        case GET_POSTS:
            // Retourne directement les posts récupérés.
            return action.payload;

        // En cas d'ajout d'un post.
        case ADD_POST:
            // Ajoute le nouveau post au début du tableau des posts actuels.
            return [action.payload, ...state];

        // En cas de modification d'un post.
        case EDIT_POST:
            // Parcourt l'ensemble des posts pour trouver celui à modifier.
            return state.map((post) => {
                if (post.id === action.payload.id) {
                    // Si le post courant est celui à modifier, on retourne une copie modifiée du post.
                    return {
                        ...post,
                        content: action.payload.content,
                    };
                } else {
                    // Sinon, on retourne le post tel quel.
                    return post;
                }
            });

        // En cas de suppression d'un post.
        case DELETE_POST:
            // Exclut le post ayant l'ID correspondant à celui du post à supprimer.
            return state.filter((post) => post.id !== action.payload);

        // En cas d'ajout d'un "like" à un post.
        case ADD_POST_LIKE:
            // Parcourt l'ensemble des posts pour trouver celui à "liker".
            return state.map((post) => {
                if (post.id === action.payload.id) {
                    // Si le post courant est celui à "liker", on retourne une copie avec le compteur de "likes" mis à jour.
                    return {
                        ...post,
                        likes: action.payload.likes,
                    };
                } else {
                    // Sinon, on retourne le post tel quel.
                    return post;
                }
            });

        // Si aucune action correspondante n'est trouvée.
        default:
            // Retourne l'état actuel sans le modifier.
            return state;
    }
}
