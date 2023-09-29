import React from "react";

// On importe les hooks de Redux nécessaires pour interagir avec le store.
import { useDispatch, useSelector } from "react-redux";

// On importe les actions que nous souhaitons dispatcher.
import { addPostLike } from "../actions/post.action";
import { addUserLike } from "../actions/user.action";

// Ce composant permet d'afficher un bouton "J'aime" et de gérer les likes pour un post.
const Like = ({ post }) => {

  // Avec useDispatch, on obtient une référence à la fonction dispatch du store Redux.
  // Elle est utilisée pour envoyer des actions au store.
  const dispatch = useDispatch(); 

  // Avec useSelector, on peut accéder au state de notre store.
  // Ici, on récupère les données de l'utilisateur.
  const user = useSelector((state) => state.userReducer); 

  const handleLike = () => {

    // On crée un nouvel objet pour le post, en mettant à jour le nombre de likes.
    const postData = {
      title: post.title,
      author: post.author,
      content: post.content,
      id: post.id,
      likes: post.likes + 1,
    };

    // On crée un nouvel objet pour l'utilisateur, en mettant à jour le nombre de ses likes.
    const userData = {
      pseudo: user.pseudo,
      likes: user.likes + 1,
      age: user.age,
      id: user.id,
    };

    // On dispatche les actions avec les nouvelles données pour mettre à jour le store.
    dispatch(addPostLike(postData));
    dispatch(addUserLike(userData));

  }

  return (
    // La partie visuelle du composant :
    // Lorsqu'on clique sur l'icône "clap", la fonction handleLike est appelée.
    // On affiche aussi le nombre actuel de likes du post.
    <div>
      <img onClick={() => handleLike()} src="./icons/clap.png" className="clap" alt="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

// On exporte notre composant pour pouvoir l'utiliser ailleurs dans notre application.
export default Like;
