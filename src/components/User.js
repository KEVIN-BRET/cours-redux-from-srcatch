// Importation des dépendances nécessaires
import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";

const User = () => {
  // Utilisation du hook useSelector pour accéder à la partie user du state global de Redux
  const user = useSelector((state) => state.userReducer);
  
  // (La ligne suivante est commentée) Pour voir les détails de l'utilisateur dans la console
  // console.log(user); 

  return (
    <div className="user-container">
      <div className="user">
        {/* Vérification si l'objet user n'est pas vide avant d'afficher le pseudo */}
        <h3>{!isEmpty(user) && user.pseudo}</h3>
        
        {/* Affichage de l'image de l'utilisateur */}
        <img src="./img/bill-gates.png" alt="bill gates" />
        
        {/* Vérification si l'objet user n'est pas vide avant d'afficher l'âge */}
        <p>Age : {!isEmpty(user) && user.age} ans</p>
        
        {/* Vérification si l'objet user n'est pas vide pour afficher le nombre de likes. 
            Si l'utilisateur a plus d'un like, ajoute un 's' à 'Like'. */}
        <p>Like{!isEmpty(user) && user.likes > 1 ? "s" : ""} : {!isEmpty(user) && user.likes}</p>
      </div>
    </div>
  );
};

// Exportation du composant pour l'utiliser ailleurs dans l'application
export default User;
