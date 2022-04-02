import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { serverProcess } from './server-process/server-process';
import { appProcess } from './app-process/app-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.server]: serverProcess.reducer,
  [NameSpace.app]: appProcess.reducer,
  [NameSpace.user]: userProcess.reducer,
});
