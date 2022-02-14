import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const DataMainPage = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  released: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      name = {DataMainPage.name}
      genre = {DataMainPage.genre}
      released = {DataMainPage.released}
    />
  </React.StrictMode>,
  document.getElementById('root'));
