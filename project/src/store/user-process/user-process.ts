import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus} from '../../const';
import { UserData } from '../../types/server';
import {State, UserProcess} from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  data: {} as UserData,
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
export const getUserData = (state: State): UserData => state[NameSpace.user].data;
export const {requireAuthorization} = userProcess.actions;
