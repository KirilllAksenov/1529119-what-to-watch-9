import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { getFilms} from '../../store/app-data/app-data';
import { filterFilmsByGenre, setGenre} from '../../store/app-process/app-process';

type Props = {
  activeGenre: string,
  genre: string,
}

function GenreItem({activeGenre, genre}: Props): JSX.Element {
  const dispatch =  useAppDispatch();
  const initialFilms = useAppSelector(getFilms);

  const handleClickGenre = () => {
    dispatch(setGenre(genre));
    dispatch(filterFilmsByGenre(initialFilms));
  };

  return (
    <li className = {`catalog__genres-item ${genre === activeGenre ? 'catalog__genres-item--active' : ''}`}>
      <Link onClick = {handleClickGenre} to={'/'} className="catalog__genres-link">{genre}</Link>
    </li>
  );
}
export default memo(GenreItem);
