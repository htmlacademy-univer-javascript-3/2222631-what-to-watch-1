import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import {store} from './store';

import App from './components/app/app';
import Error from './components/error/error';

import {checkAuthAction, fetchFilmsAction, fetchPromoAction} from './store/api-actions';

store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Error />
      <App />
    </Provider>
  </React.StrictMode>,
);
