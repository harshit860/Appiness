import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from './Redux/Reducers'
import auth from './Redux/authreducer'
import {createStore , combineReducers} from 'redux'
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';


const rootReducer = combineReducers({ data , auth });


const main_store = createStore(rootReducer)

ReactDOM.render(
    <Provider  store={main_store}>
        <App />
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
