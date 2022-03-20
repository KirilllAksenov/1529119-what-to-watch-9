import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveGenre } from '../../store/action';

type Props = {
  genres: string[];
}

function GenreList({genres}: Props): JSX.Element {
  const activeGenre = useAppSelector((state) => state.activeGenre);
  const dispatch = useAppDispatch();
  return (
    <>
      {genres.map((genre) => (
        <li
          key = {genre}
          className = {`catalog__genres-item ${genre === activeGenre ? 'catalog__genres-item--active' : ''}`}
          onClick = {() => {
            dispatch(setActiveGenre(genre));
          }}
        >
          <Link to={''} className="catalog__genres-link">{genre}</Link>
        </li>
      ))}
    </>
  );
}

export default GenreList;


