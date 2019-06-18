import { createStore, combineReducers, applyMiddleware } from 'redux';
import { systemReducer } from './system/reducer';
import { chatReducer } from './chat/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleWare from 'redux-thunk';

const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = () => {
  const middleWares = [thunkMiddleWare];
  const middleWareEnhancer = applyMiddleware(...middleWares);
  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  return store;
};

export default configureStore;
