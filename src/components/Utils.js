// Fonction qui vérifie si un objet est vide

export const isEmpty = (value) => {
  return (
    // Vérifie si la valeur est undefined
    value === undefined ||
    
    // Vérifie si la valeur est null
    value === null ||
    
    // Vérifie si la valeur est un objet et qu'il n'a pas de clés (donc, vide)
    (typeof value === "object" && Object.keys(value).length === 0) ||
    
    // Vérifie si la valeur est une chaîne de caractères et qu'elle est vide ou ne contient que des espaces
    (typeof value === "string" && value.trim().length === 0)
  );
};
