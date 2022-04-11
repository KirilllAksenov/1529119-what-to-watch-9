import {Film} from '../../types/film';

type Props = {
  film: Film;
}

const ratingValue = [
  {
    min: 0,
    max: 3,
    value: 'Bad',
  },
  {
    min: 3,
    max: 5,
    value: 'Normal',
  },
  {
    min: 5,
    max: 8,
    value: 'Good',
  },
  {
    min: 8,
    max: 10,
    value: 'Very good',
  },
  {
    min: 10,
    max: Infinity,
    value: 'Awesome',
  },
];

const getRatingValue = (rating: number) => {
  const findededRating = ratingValue.find((item) => rating >= item.min && rating <= item.max);
  return findededRating?.value;
};

function OverviewTab({film}: Props):JSX.Element {
  const {rating, scoresCount, description, director, starring} = film;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingValue(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {starring && starring.join(', ')}</strong></p>
      </div>
    </>
  );
}
export default OverviewTab;
