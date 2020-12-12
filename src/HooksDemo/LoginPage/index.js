import React, { useState } from 'react';
import LoginButton from './LoginButton';

const initialState = {
    name: '',
    password: '',
    isLoading: false,
    error: '',
    isLoggedIn: false,
}

const loginReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case 'success':
            return {
                ...state,
                isLoading: false,
                isLoggedIn: !state.isLoggedIn,
            }
        case 'error':
            return {
                ...state,
                isLoading: false,
                name: '',
                password: '',
                error: action.payload.error,
            }
        default:
            return state;
    }
}

export const LoginContext = React.createContext();

const loginProcess = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12);
    }, 2000);
})
const LoginPage = () => {
    const [ state, dispatch ] = React.useReducer(loginReducer, initialState);
    const { name, password, isLoading, error, isLoggedIn } = state;

    const login = (event) => {
        event.preventDefault();
        dispatch({ type: 'login' });
        loginProcess().then(() => {
            dispatch({ type: 'success' });
        }).catch(() => {
            dispatch({ type: 'error', payload: { error: error.message} });
        })
    }

    console.log(`The isLogged in is ${isLoggedIn}` )
    return (
        <LoginContext.Provider value={dispatch }>
            123
            <LoginButton />
        </LoginContext.Provider>
    )
}

export default LoginPage;