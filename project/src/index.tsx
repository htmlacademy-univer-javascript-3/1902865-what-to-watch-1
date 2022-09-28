import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const DataFilm = {
  name:'Game of Thrones',
  genre:'fantasic',
  date:2008,
};
root.render(
  <React.StrictMode>
    <App FilmInfo={DataFilm}/>
  </React.StrictMode>,
);
