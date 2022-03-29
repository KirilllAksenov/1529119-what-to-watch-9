import { useAppDispatch } from '../../hooks';
import { showMoreFilms } from '../../store/action';

type Props = {
  showedFilmsCount: number;
  filmsCount: number;
}

function ShowMoreButton({showedFilmsCount, filmsCount}: Props): JSX.Element | null {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      <button onClick={() => {
        dispatch(showMoreFilms());
      }} className="catalog__button" type="button"
      >Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
