import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { getOffersAction } from './store/actions';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(getOffersAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App />
    </Provider>
  </React.StrictMode>,
);
