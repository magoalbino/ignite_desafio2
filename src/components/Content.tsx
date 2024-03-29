import '../styles/content.scss';
import { MovieCard } from "./MovieCard";

import { MovieProps } from "../interfaces/movie";
import { GenreResponseProps } from "../interfaces/genre";

interface ContentProps {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[]
}

export function Content({ selectedGenre, movies }: ContentProps) {

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}