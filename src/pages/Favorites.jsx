import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext.jsx"
import MovieCard from "../components/MovieCard"

function Favorites() {

    const { favorites } = useMovieContext()

    if (favorites) {
        return (
        <div className="favorites">
            <h2>Your Favorites</h2>
            <div className="movies-grid">
                {favorites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div> )
    };


    return (<div className="favorite-empty">
        <h2> No fav movies yet</h2>
        <p> Start adding movies to your favs and theyll appear here</p>
    </div>)
}

export default Favorites;