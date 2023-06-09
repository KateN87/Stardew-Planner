import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import userReducer from './Reducers/userReducer';
import resourceOrderReducer from './Reducers/resourceOrderReducer';

const store = configureStore({
    reducer: {
        userReducer: userReducer,
        resourceOrderReducer: resourceOrderReducer,
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
);
