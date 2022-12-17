import {store} from '../../store';
import {AuthorizationStatus} from '../../const';

export type UserMeta = {
  authorizationStatus: AuthorizationStatus,
  avatar: string | null,
  userId: number | null,
};

export type UserState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
