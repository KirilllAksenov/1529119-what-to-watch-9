import { useAppSelector } from '../../hooks';
import GenreItem from './genre-item';

function GenreList(): JSX.Element {
  const genres = useAppSelector((state) => state.films.genres);
  const activeGenre: string = useAppSelector((state) => state.activeGenre);

  const genreList = genres.map(((genre) => <GenreItem key={genre} genre={genre} activeGenre={activeGenre} /> ));

  return (
    <ul className="catalog__genres-list">
      {genreList}
    </ul>
  );
}

export default GenreList;
