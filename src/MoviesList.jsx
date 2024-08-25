
import React, { useState } from 'react';

const MoviesList = () => {
 
    const initialMovies = [
        { id: 1, title: 'The Shawshank Redemption', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', genre: 'Drama' },
        { id: 2, title: 'The Dark Knight', description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.', genre: 'Action' },
        { id: 3, title: 'Inception', description: 'A thief who enters the dreams of others to steal secrets from their subconscious is given a chance to have his criminal history erased as payment for the implantation of another person\'s idea into a target\'s subconscious.', genre: 'Sci-Fi' },
        { id: 4, title: 'The Matrix', description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.', genre: 'Action' }
    ];

    const [movies, setMovies] = useState(initialMovies);
    const [viewGenre, setViewGenre] = useState('All');
    const [details, setDetails] = useState({});

    const toggleDetails = (id) => {
        setDetails(prevDetails => ({
            ...prevDetails,
            [id]: !prevDetails[id]
        }));
    };

    const removeMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    };

    const toggleView = () => {
        setViewGenre(prevGenre => (prevGenre === 'All' ? 'Action' : 'All'));
    };

    const filteredMovies = viewGenre === 'All' ? movies : movies.filter(movie => movie.genre === viewGenre);

    return (
        <div>
            <button onClick={toggleView}>
                {viewGenre === 'All' ? 'Show Action Movies' : 'Show All Movies'}
            </button>
            <ul>
                {filteredMovies.map(movie => (
                    <li key={movie.id}>
                        <h3 onClick={() => toggleDetails(movie.id)}>{movie.title}</h3>
                        {details[movie.id] && <p>{movie.description}</p>}
                        <button onClick={() => removeMovie(movie.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
