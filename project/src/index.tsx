import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offerCards} from './mocks/offers';
import {reviewItems} from './mocks/reviews';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


enum Settings {
  offersCount = 5
}

root.render(
  <React.StrictMode>
    <App offersCount={Settings.offersCount} offerCards={offerCards} reviewItems={reviewItems} />
  </React.StrictMode>,
);
