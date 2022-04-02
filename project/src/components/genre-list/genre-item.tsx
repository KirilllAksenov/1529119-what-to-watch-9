import React from 'react';
import { Link } from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {setActiveGenre} from '../../store/action';

type Props = {
  activeGenre: string,
  genre: string,
}

function GenreItem({activeGenre, genre}: Props): JSX.Element {
  const dispatch =  useAppDispatch();
  return (
    <li className = {`catalog__genres-item ${genre === activeGenre ? 'catalog__genres-item--active' : ''}`}>
      <Link onClick = {() => {dispatch(setActiveGenre(genre));}} to={'/'} className="catalog__genres-link">{genre}</Link>
    </li>
  );
}
export default GenreItem;
