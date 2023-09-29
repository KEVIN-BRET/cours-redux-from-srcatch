// On importe la fonction "combineReducers" de la bibliothèque "redux".
// Cette fonction est utilisée pour combiner plusieurs reducers en un seul.
import { combineReducers } from "redux";

// On importe les reducers "userReducer" et "postReducer" que nous souhaitons combiner.
import userReducer from "./user.reducer";
import postReducer from "./post.reducer";

// On exporte le résultat de la combinaison des reducers.
// combineReducers prend un objet en argument, où chaque clé/valeur correspond à
// un morceau de l'état global de l'application et le reducer associé.
export default combineReducers({
    // La clé "userReducer" sera associée à l'état géré par "userReducer".
    userReducer,
    
    // La clé "postReducer" sera associée à l'état géré par "postReducer".
    postReducer,
});
