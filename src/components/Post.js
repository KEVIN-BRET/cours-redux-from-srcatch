import React, { useState } from "react";
// Importation des hooks de Redux pour interagir avec le store et dispatcher des actions.
import { useDispatch, useSelector } from "react-redux";
import Like from "./Like"; // Composant "Like" pour gérer les likes.
import { isEmpty } from "./Utils"; // Une fonction utilitaire pour vérifier si un objet est vide.
import { deletePost, editPost } from "../actions/post.action"; // Importation des actions nécessaires.

const Post = ({ post }) => {
  // Gestion de l'état local pour activer/désactiver le mode édition.
  const [editToggle, setEditToggle] = useState(false);

  // Récupération de l'utilisateur actuel depuis le store Redux.
  const user = useSelector((state) => state.userReducer);

  // Gestion de l'état local pour le contenu édité.
  const [editContent, setEditContent] = useState(post.content);

  // Hook pour dispatcher des actions vers le store.
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault(); // Prévention du comportement par défaut de la soumission du formulaire.

    // Création d'un nouvel objet avec les données du post mises à jour.
    const postData = {
      title: post.title,
      author: user.pseudo,
      likes: post.likes,
      id: post.id,
      content: editContent,
    };

    // Dispatch de l'action pour éditer le post.
    dispatch(editPost(postData));

    // Désactivation du mode édition.
    setEditToggle(false);
  };

  return (
    <div className="post">
      {/* Si l'utilisateur est connecté et qu'il est l'auteur du post, il voit les icônes "édition" et "suppression". */}
      {!isEmpty(user) && user.pseudo === post.author && (
        <div className="edit-delete">
          <img
            src="./icons/edit.svg"
            alt="edit"
            onClick={() => setEditToggle(!editToggle)} // Active/désactive le mode édition.
          />
          <img
            src="./icons/delete.svg"
            alt="delete"
            onClick={() => dispatch(deletePost(post.id))} // Dispatch de l'action pour supprimer le post.
          />
        </div>
      )}

      <h2>{post.title}</h2>
      <img
        src="https://picsum.photos/1500/400"
        className="post-img"
        alt="img-post"
      />

      {/* Si le mode édition est activé, on affiche le formulaire d'édition, sinon on affiche simplement le contenu. */}
      {editToggle ? (
        <form onSubmit={e => handleEdit(e)}>
          <textarea autoFocus={true} defaultValue={post.content} onChange={e => setEditContent(e.target.value)} ></textarea>
          <input type="submit" value="Valider modification" />
        </form>
      ) : (
        <p>{post.content}</p>
      )}

      <div className="author">
        <h5>{post.author}</h5>
        <Like post={post} /> {/* Composant "Like" pour gérer les likes du post. */}
      </div>
    </div>
  );
};

// Exportation du composant pour une utilisation ailleurs dans l'application.
export default Post;
