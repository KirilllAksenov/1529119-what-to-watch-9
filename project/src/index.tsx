import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { films } from './mocks/films';
import {comments} from './mocks/comments';
import { store } from './store';

const promoFilmParams = {
  genre: 'Drama',
  releaseDate: 2014,
  title: 'The Grand Budapest Hotel',
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        films={films}
        promo={promoFilmParams}
        comments={comments}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
