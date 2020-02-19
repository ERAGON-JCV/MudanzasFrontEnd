import { createStore, compose, applyMiddleware } from 'redux';
import PromiseMiddleware from 'redux-promise'
import reducers from './Reducers';


const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store =
    createStore(reducers, {}, composeEnchancers(applyMiddleware(PromiseMiddleware)));