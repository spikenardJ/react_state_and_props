// Question 2: Enhancing Functional Components with React Hooks
import React, { useState } from "react";

// Task 1: Initializing and Displaying a List
const MoviesList = () => {
    const [movies, setMovies] = useState([
        { title: "Forrest Gump", genre: "Drama", description: "A touching story of a simple man with a complex life." },
        { title: "The Godfather", genre: "Drama", description: "A story of a mafia family." },
        { title: "The Dark Knight", genre: "Action", description: "A superhero movie about Batman." },
        { title: "Inception", genre: "Sci-Fi", description: "A mind-bending thriller." },
        { title: "Titanic", genre: "Romance", description: "A love story on a sinking ship." },
        { title: "The Shawshank Redemption", genre: "Drama", description: "Two prisoners form a lasting friendship in Shawshank prison." },
        { title: "Die Hard", genre: "Action", description: "A cop battles terrorists in a skyscraper." }
    ]);
    
    const [toggled, setToggled] = useState(new Array(movies.length).fill(false));
    const [showAction, setShowAction] = useState(false);

    const handleToggle = (index) => {
        const newToggled = [...toggled];
        newToggled[index] = !newToggled[index];
        setToggled(newToggled);
    };

    const removeMovie = (index) => {
        const newMovies = movies.filter((movie, i) => i !== index);
        setMovies(newMovies);
    };

    const toggleGenreView = () => {
        setShowAction(!showAction);
    };

    return (
        <div id="movie-type">
            <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Favorite Movies</h2>
            <p><small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click Title for Description</small></p>
            {/* /* Task 4: Toggling List View */}
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={toggleGenreView}>
                    {showAction ? "Show All Movies" : "Show Action Movies"}
                </button>
            </div>
            <ul>
                {movies
                    .filter(movie => !showAction || movie.genre === "Action")
                    .map((movie, index) => (
                        <li key={index}>
                            {/* Task 2: Conditional Rendering of Movie Details */}
                            <h3 onClick={() => handleToggle(index)}>{movie.title}</h3>
                            {toggled[index] && <p><small>{movie.description}</small></p>}
                            {/* Task 3: Implementing Movie Removal */}
                            <button onClick={() => removeMovie(index)}>Remove</button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default MoviesList;