import React, { memo } from 'react';
import {useAppDispatch} from '../../hooks';
import { setGenre} from '../../store/app-process/app-process';

type Props = {
  activeGenre: string,
  genre: string,
}

function GenreItem({activeGenre, genre}: Props): JSX.Element {
  const dispatch =  useAppDispatch();

  const handleClickGenre = () => {
    dispatch(setGenre(genre));
  };

  return (
    <li className={`catalog__genres-item ${genre === activeGenre ? 'catalog__genres-item--active' : ''}`}>
      <span onClick={handleClickGenre} className="catalog__genres-link">{genre}</span>
    </li>
  );
}
export default memo(GenreItem);
