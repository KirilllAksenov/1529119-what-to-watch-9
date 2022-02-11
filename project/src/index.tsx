import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const DataMainPage = {
  filmTitle: 'The Grand Budapest Hotel',
  filmGenre: 'Drama',
  releaseDate: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      filmTitle = {DataMainPage.filmTitle}
      filmGenre = {DataMainPage.filmGenre}
      releaseDate = {DataMainPage.releaseDate}
    />
  </React.StrictMode>,
  document.getElementById('root'));
