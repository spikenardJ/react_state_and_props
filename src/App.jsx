import { useState } from "react";
import UserProfile from "./UserProfile";
import MoviesList from "./MoviesList";
import "./FavoriteThings.css";

const App = () => {
  const [name] = useState("Charlie")

  return (
    <div>
        <UserProfile name={name}/>
        <MoviesList />
    </div>
  )
}

export default App;