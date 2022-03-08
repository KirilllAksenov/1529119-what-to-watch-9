import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';
import {comments} from './mocks/comments';

const promoFilmParams = {
  genre: 'Drama',
  releaseDate: 2014,
  title: 'The Grand Budapest Hotel',
};

ReactDOM.render(
  <React.StrictMode>
    <App
      films={films}
      promo={promoFilmParams}
      comments={comments}
    />
  </React.StrictMode>,
  document.getElementById('root'));
