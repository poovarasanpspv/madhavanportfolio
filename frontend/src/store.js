import {combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from './slices/authSlice';
// import { thunk } from "redux-thunk";
const reducer = combineReducers({
    authState: authReducer
});

const store = configureStore({
    reducer: reducer,
    // middleware: applyMiddleware(thunk)
})

export default store;