import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import FILMS from './mocks/films';
import promo from './mocks/promo';
import COMMENTS from './mocks/comments';
import SIMILAR from './mocks/similar';
import FAVORITE from './mocks/favorite';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        promo={promo}
        films={FILMS}
        reviews={COMMENTS}
        similar={SIMILAR}
        favorite={FAVORITE}
      />
    </Provider>
  </React.StrictMode>,
);
