// On importe les modules nécessaires.
import React from "react";                  // Import principal de React.
import ReactDOM from "react-dom";           // React DOM pour la manipulation du DOM.
import App from "./App";                    // Import de notre composant principal App.
import "./styles/index.scss";              // Import des styles globaux pour l'application.

// REDUX :
// Import des modules nécessaires pour la configuration de Redux.
import { Provider } from "react-redux";    // Provider englobe notre application pour qu'elle puisse accéder au store Redux.
import { configureStore } from "@reduxjs/toolkit"; // Pour configurer et créer notre store.
import rootReducer from "./reducers";      // Import du reducer combiné (tous nos reducers fusionnés en un seul).
import { getPosts } from "./actions/post.action"; // Import de l'action pour récupérer les posts.
import { getUser } from "./actions/user.action"; // Import de l'action pour récupérer l'utilisateur.

// Configuration du store Redux.
const store = configureStore({
	reducer: rootReducer,               // On spécifie notre reducer combiné.
	devTools: true,                     // Active les outils de développement Redux (à utiliser seulement en mode développement !).
})

// Lors de l'initialisation de l'application, on déclenche les actions pour récupérer les posts et les infos de l'utilisateur.
store.dispatch(getPosts());
store.dispatch(getUser());

// On rend notre composant App à l'intérieur de l'élément avec l'ID 'root' dans le HTML.
// Le composant Provider englobe App pour fournir le store Redux à toute notre application.
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById("root")); 
