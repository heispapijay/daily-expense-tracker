import React, { createContext, useReducer } from 'react';
import app_reducer from './app_reducer';

const initialState = {
    transactions: []
}


export const GlobalContext = createContext(initialState);

export const GlobalApiProvider = ({ children }) => {
    const [state, dispatch] = useReducer(app_reducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}