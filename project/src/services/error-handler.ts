import {store} from '../store';

import {setError} from '../store/app-processor/app-processor';
import {TIMEOUT_SHOW_ERROR} from '../const';

export const errorHandler = (message: string): void => {
  store.dispatch(setError(message));

  setTimeout(
    () => store.dispatch(setError(null)),
    TIMEOUT_SHOW_ERROR,
  );
};
