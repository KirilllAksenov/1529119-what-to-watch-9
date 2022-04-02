import { useAppDispatch } from '../../hooks';
import { showMoreFilms } from '../../store/app-process/app-process';

type Props = {
  showedFilmsCount: number;
  filmsCount: number;
}

function ShowMoreButton({showedFilmsCount, filmsCount}: Props): JSX.Element | null{
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(showMoreFilms());

  if (showedFilmsCount >= filmsCount) {
    return (null);
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
