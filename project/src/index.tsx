import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const MainPageData = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  released: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      name = {MainPageData.name}
      genre = {MainPageData.genre}
      released = {MainPageData.released}
    />
  </React.StrictMode>,
  document.getElementById('root'));
