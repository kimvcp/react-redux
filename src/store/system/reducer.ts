import { SystemState, LOGGED_IN, SystemActionTypes } from './types';

const initialState: SystemState = {
  userName: '',
  loggedIn: false
};

function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case LOGGED_IN: {
      return {
        ...state, //new state
        loggedIn: true,
        userName: action.payload
      };
    }
    default:
      return state;
  }
}

export { systemReducer };
