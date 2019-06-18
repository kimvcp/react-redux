import { LOGGED_IN, LoggedInAction } from './types';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../configureStore';
import { Action } from 'redux';
import * as loginService from '../../services/loginService';

export function loggedIn(username: string): LoggedInAction {
  return {
    type: LOGGED_IN,
    payload: username
  };
}
export function login(
  userName: string
): ThunkAction<void, AppState, null, Action<string>> {
  return (dispatch: Function) => {
    loginService
      .login(userName)
      .then(value => {
        if (value) {
          dispatch(loggedIn(userName));
        }
      })
      .catch(reason => {
        console.log(reason);
      });
  };
}
