import { createStore, combineReducers } from 'redux';
import { systemReducer } from './system/reducer';
import { chatReducer } from './chat/reducer';
import  {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools());
  return store;
};

export default configureStore;