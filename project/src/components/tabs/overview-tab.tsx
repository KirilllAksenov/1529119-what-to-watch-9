import {Film} from '../../types/film';

type Props = {
  film: Film;
}

const ratingsValue = {
  0: 'Bad',
  1: 'Bad',
  2: 'Bad',
  3: 'Normal',
  4: 'Normal',
  5: 'Good',
  6: 'Good',
  7: 'Good',
  8: 'Very Good',
  9: 'Very Good',
  10: 'Awesome',
};

function OverviewTab({film}: Props):JSX.Element {
  const {rating, scoresCount, description, director, starring} = film;
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingsValue[9]}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {starring}</strong></p>
      </div>
    </>
  );
}
export default OverviewTab;
