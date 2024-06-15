import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    expenses: JSON.parse(localStorage.getItem('expenses')) || [
        { id: "Shirt", name: 'Shirt', quantity: 0, unitprice: 500 },
        { id: "Jeans", name: 'Jeans', quantity: 0, unitprice: 300 },
        { id: "Dress", name: 'Dress', quantity: 0, unitprice: 400 },
        { id: "Dinner set", name: 'Dinner set', quantity: 0, unitprice: 600 },
        { id: "Bags", name: 'Bags', quantity: 0, unitprice: 200 },
    ],
    Location: '£',
    CartValue: 1000,
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(state.expenses));
    }, [state.expenses]);

    useEffect(() => {
        localStorage.setItem('CartValue', state.CartValue);
    }, [state.CartValue]);

    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
            {props.children}
        </AppContext.Provider>
    );
};
