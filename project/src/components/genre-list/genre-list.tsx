import {useAppSelector} from '../../hooks';
import {getActiveGenre} from '../../store/app-process/app-process';
import GenreItem from '../genre-item/genre-item';

type Props = {
  genres: string[];
};

function GenreList({genres}: Props): JSX.Element {
  const activeGenre = useAppSelector(getActiveGenre);

  const genreList = genres.map((genre) => (
    <GenreItem key={genre} genre={genre} activeGenre={activeGenre} />
  ));

  return <ul className='catalog__genres-list'>{genreList}</ul>;
}

export default GenreList;
