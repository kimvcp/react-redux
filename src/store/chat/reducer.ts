import { ChatState, SEND_MESSAGE, ChatActionTypes, CLEAR_MESSAGE } from './types';

const initialState: ChatState = {
  message: []
};

function chatReducer(state = initialState, {type, payload}: ChatActionTypes): ChatState {
  switch (type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        message: [...state.message, payload]
      };
    }
    case CLEAR_MESSAGE: {
      return {
        ...state,
        message: []
      }
    }
    default:
      return state;
  }
}

export { chatReducer };
