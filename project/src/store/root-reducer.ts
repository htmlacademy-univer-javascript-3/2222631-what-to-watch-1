import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';

import {userMetaProcessor} from './user-meta-processor/user-meta-processor';
import {mainPageProcessor} from './main-page-processor/main-page-processor';
import {filmMetaProcessor} from './film-meta-processor/film-meta-processor';
import {appProcessor} from './app-processor/app-processor';

export const rootReducer = combineReducers({
  [NameSpace.MainScreen]: mainPageProcessor.reducer,
  [NameSpace.FilmScreen]: filmMetaProcessor.reducer,
  [NameSpace.User]: userMetaProcessor.reducer,
  [NameSpace.App]: appProcessor.reducer,
});
