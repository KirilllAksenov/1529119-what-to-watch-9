import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import browserHistory from './browser-history';
import App from './components/app/app';
import ErrorMessage from './components/error-message/errorMessage';
import HistoryRouter from './components/history-route/history-router';
import { store } from './store';
import { checkAuthAction, fetchFilmsAction, fetchPromoFilmAction } from './store/api-actions';

store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ErrorMessage/>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
