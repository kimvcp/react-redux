import {
  Message,
  ChatState,
  SendMessageAction,
  SEND_MESSAGE,
  CLEAR_MESSAGE,
  ClearMessageAction
} from './types';

export function sendMessage(message: Message): SendMessageAction {
  return {
    type: SEND_MESSAGE,
    payload: message
  };
}

export function clearMessage(): ClearMessageAction {
  return {
    type: CLEAR_MESSAGE
  };
}
