
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './reducer';

export const store = createStore(todoReducer, applyMiddleware(thunk));