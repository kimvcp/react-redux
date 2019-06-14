import { LOGGED_IN, LoggedInAction } from './types';

export function loggedIn(username: string): LoggedInAction {
  return {
    type: LOGGED_IN,
    payload: username
  };
}
