import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilteredFilmsByGenre, getShowedFilmsCount, showMoreFilms } from '../../store/app-process/app-process';

function ShowMoreButton(): JSX.Element | null{
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(showMoreFilms());
  const filteredFilmsByGenre = useAppSelector(getFilteredFilmsByGenre);
  const filmsCount = filteredFilmsByGenre.length;
  const showedFilmsCount = useAppSelector(getShowedFilmsCount);

  if (showedFilmsCount >= filmsCount) {
    return null;
  }

  return (
    <div className="catalog__more">
      <button onClick={handleClick} className="catalog__button" type="button">
        Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
