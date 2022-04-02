import { useAppDispatch, useAppSelector } from '../../hooks';
import { showMoreFilms } from '../../store/action';

function ShowMoreButton() {
  const dispatch = useAppDispatch();
  const filmsCount = useAppSelector((state) => state.films.data.length);
  const showedFilmsCount = useAppSelector((state) => state.showedFilmsCount);

  const handleClick = () => dispatch(showMoreFilms());

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
