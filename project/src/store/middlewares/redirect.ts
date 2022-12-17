import {Middleware} from '@reduxjs/toolkit';
import history from '../../history';
import {rootReducer} from '../root-reducer';

type Reducer = ReturnType<typeof rootReducer>;


export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === 'app/redirectToRoute') {
          history.push(action.payload);
        }

        return next(action);
      };
