import React from "react";
import { useSelector } from "react-redux";
import PostForm from "./components/PostForm";
import User from "./components/User";
import Post from "./components/Post"
import { isEmpty } from "./components/Utils";

const App = () => {
  // Le useSelector permet de récupérer des data dans le store
  const posts = useSelector((state) => state.postReducer);


  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">
          {/* // On vérifie si le tableau posts est vide ou non Pour ne pas mapper avant l'arrivée des données */}
          {!isEmpty(posts)
            && posts.map((post, index) => (
              <Post post={post} key={index} />
            ))}
        </div>
        <User />
      </div>
    </div>
  );
};

export default App;
