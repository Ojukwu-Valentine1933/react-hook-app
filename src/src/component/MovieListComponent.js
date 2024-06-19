import movies from "../player-folder/movie";
import MovieComponent from "./MovieComponent";

const MovieListComponent = () => {
  return (
    <section className="container">
      <div className="mt-5">
        <div className="row">
          {movies.map((movie) => (
            <MovieComponent key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default MovieListComponent;
