import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './store/store';
import App from "./components/App/App.jsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

