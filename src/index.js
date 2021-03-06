import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware , compose } from 'redux';
import thunk from "redux-thunk";
import dashboardReducer from './store/reducers/dashboard';
import sidebarReducer from './store/reducers/sidebar';



const rootReducer = combineReducers({
    db: dashboardReducer,
    sb: sidebarReducer
});

//Data for Redux devtools
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancers(compose(
//     applyMiddleware(thunk))));

const store = createStore(rootReducer,
    applyMiddleware(thunk));



ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename="/app/">
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
