import { MovieCard } from "./MovieCard";
import { MovieProps  } from "../App";

type ContentProps = {
  movies: MovieProps[]
}

export function Content({ movies }: ContentProps) {
  return (
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>
  )
}