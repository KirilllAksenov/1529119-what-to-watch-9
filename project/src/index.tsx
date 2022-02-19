import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const mainPageData = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  released: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      name = {mainPageData.name}
      genre = {mainPageData.genre}
      released = {mainPageData.released}
    />
  </React.StrictMode>,
  document.getElementById('root'));
