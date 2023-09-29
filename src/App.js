// Import des modules nécessaires
import React from "react"; // Import de React
import { useSelector } from "react-redux"; // Import du hook useSelector de Redux, pour accéder à l'état du store Redux
import PostForm from "./components/PostForm"; // Import du composant pour le formulaire de post
import User from "./components/User"; // Import du composant pour l'affichage de l'utilisateur
import Post from "./components/Post" // Import du composant pour afficher un post
import { isEmpty } from "./components/Utils"; // Import d'une fonction utilitaire pour vérifier si une variable est vide

const App = () => {
  // On utilise le hook useSelector pour récupérer les posts depuis le state global de l'application.
  // state.postReducer fait référence à la partie du state gérée par le réducteur "postReducer"
  const posts = useSelector((state) => state.postReducer);

  return (
    <div>
      <h1>Extreme</h1> 
      <PostForm /> {/* Affichage du formulaire de post */}

      <div className="content">
        <div className="post-container">
          {/* 
            On vérifie si le tableau de posts n'est pas vide en utilisant la fonction isEmpty.
            Si le tableau n'est pas vide, on utilise map pour parcourir chaque post et l'afficher 
            à l'aide du composant Post. On donne également une clé à chaque élément pour aider React 
            à identifier chaque élément lors de la mise à jour du DOM.
          */}
          {!isEmpty(posts)
            && posts.map((post, index) => (
              <Post post={post} key={index} />
            ))}
        </div>
        <User /> {/* Affichage du composant User pour montrer les détails de l'utilisateur */}
      </div>
    </div>
  );
};

// On exporte le composant App pour pouvoir l'utiliser ailleurs dans l'application
export default App;
