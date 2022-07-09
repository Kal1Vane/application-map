import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';
import App from './components/app/app';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
    <Provider store={store}>
        <ToastContainer />
        <App />
    </Provider>,
    document.getElementById('root'),
);
