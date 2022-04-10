import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus} from '../../const';
import { UserData } from '../../types/server';
import {State} from '../../types/state';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  data: UserData | undefined,
};

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  data: undefined,
};

export const userProcess = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload.authorizationStatus;
      state.data = action.payload.data;
    },
  },
});

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;
export const getUserData = (state: State): UserData | undefined => state[NameSpace.user].data;
export const {requireAuthorization} = userProcess.actions;
