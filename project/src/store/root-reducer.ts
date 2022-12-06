import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {appProcess} from './app-process/app-process';

import {userProcess} from './user-process/user-process';
import {mainData} from './main-data/main-data';
import {filmData} from './film-data/film-data';

export const rootReducer = combineReducers({
  [NameSpace.MainPage]: mainData.reducer,
  [NameSpace.FilmPage]: filmData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.App]: appProcess.reducer,
});
