import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus} from '../../const';
import {UserMeta} from '../../types/user/user-state';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';
import {saveToken} from '../../services/token';
import {getAvatarURL, saveAvatarURL} from '../../services/avatar';

const initialState: UserMeta = {
  authorizationStatus: AuthorizationStatus.Unknown,
  avatar: getAvatarURL(),
  userId: null
};

export const userMetaProcessor = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        saveToken(action.payload.token);
        state.avatar = action.payload.avatarUrl;
        saveAvatarURL(action.payload.avatarUrl);
        state.userId = action.payload.userId;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.avatar = null;
        state.userId = null;
      });
  }
});
