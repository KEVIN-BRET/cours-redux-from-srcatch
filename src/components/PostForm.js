// Import des bibliothèques et des hooks nécessaires.
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPosts } from "../actions/post.action"; // Import des actions nécessaires.

const PostForm = () => {
  // useRef est utilisé pour obtenir un accès direct aux éléments DOM. Ici, il est utilisé pour accéder au formulaire.
  const form = useRef();

  // useSelector est utilisé pour extraire des données du store Redux. Ici, on récupère l'utilisateur actuel.
  const user = useSelector((state) => state.userReducer);

  // useDispatch est utilisé pour envoyer des actions au store Redux.
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault(); // Prévention du comportement par défaut du formulaire (rechargement de la page).

    // Création de l'objet avec les données du post.
    const postData = {
      author: user.pseudo, // Pseudo de l'utilisateur actuel.
      title: form.current[0].value, // Titre du post.
      content: form.current[1].value, // Contenu du post.
      likes: 0, // Initialisation du compteur de likes à 0.
    };

    // Dispatch de l'action pour ajouter le post.
    await dispatch(addPost(postData));
    // Mise à jour de la liste des posts après l'ajout d'un nouveau post.
    dispatch(getPosts());
    // Réinitialisation du formulaire après l'envoi.
    form.current.reset();
  };

  return (
    <div className="form-container">
      {/* La référence "ref" est attribuée au formulaire pour pouvoir y accéder plus tard. */}
      <form ref={form} onSubmit={(e) => handleForm(e)} >
        <input type="text" placeholder="Titre du poste" />
        <textarea placeholder="Postez vos pensées..."></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

// Export du composant pour pouvoir l'utiliser ailleurs.
export default PostForm;
