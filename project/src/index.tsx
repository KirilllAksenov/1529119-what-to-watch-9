import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { films } from './mocks/films';
import { comments } from './mocks/comments';
import { dataGenres } from './mocks/films';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        films={films}
        comments={comments}
        genres={dataGenres}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
