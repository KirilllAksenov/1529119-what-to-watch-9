import {ChangeEvent, FormEvent, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RatingInput from './rating-stars';
import { DEFAULT_COMMENT, DEFAULT_RATING } from '../../const';
import { useAppDispatch } from '../../hooks';
import { addComment } from '../../store/api-actions';
import { CommentData } from '../../types/comment';


const MAX_SCORE = 10;

function FormReview(): JSX.Element {
  const [rating, setRating] = useState(DEFAULT_RATING);
  const [comment, setComment] = useState(DEFAULT_COMMENT);

  const params = useParams();
  const navigate = useNavigate();

  const filmId = Number(params.id);

  const dispatch = useAppDispatch();

  const ratingStars: JSX.Element[] = Array(MAX_SCORE);

  for (let i = MAX_SCORE; i > 0; --i) {
    ratingStars[MAX_SCORE - i] = (
      <RatingInput
        key={i}
        value={i}
        checked={i === rating}
        onChange={(value) => setRating(value)}
      />
    );
  }

  const fieldChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = evt.currentTarget;
    setComment(value);
  };

  const onSubmit = (commentData: CommentData) => {
    dispatch(addComment(commentData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (comment) {
      onSubmit({comment: comment, rating: rating, filmId: filmId});
      navigate(`/films/${filmId}`);
    }
  };

  return (
    <form action="#" onSubmit={handleSubmit} className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {ratingStars}
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={comment}
          onChange={fieldChangeHandler}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}


export default FormReview;
