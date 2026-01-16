import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import counterReducer from '../RTK/counterSlice'
import postReducer from '../BASCAPIRTK/slice'
import rootSaga from "./saga";


const sagaMiddleware = createSagaMiddleware()
const combineReducer = combineReducers({
  posts: postReducer,
  counter: counterReducer
});

export const store = configureStore({
  reducer: combineReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
});
sagaMiddleware.run(rootSaga);