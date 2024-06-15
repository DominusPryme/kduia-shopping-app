import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    const { CartValue, Location, dispatch, expenses } = useContext(AppContext);
    const [budget, setBudget] = useState(CartValue);

    const totalExpenses = expenses.reduce((total, item) => total + (item.unitprice * item.quantity), 0);

    const increaseBudget = () => {
        if (budget + 10 <= 20000) {
            setBudget(budget + 10);
            dispatch({ type: 'SET_BUDGET', payload: budget + 10 });
        }
    };

    const decreaseBudget = () => {
        if (budget - 10 >= totalExpenses) {
            setBudget(budget - 10);
            dispatch({ type: 'SET_BUDGET', payload: budget - 10 });
        }
    };

    return (
        <div>
            <div className='alert alert-primary'>
                <span>Budget: {Location}{budget}</span>
                <button onClick={decreaseBudget}>-</button>
                <button onClick={increaseBudget}>+</button>
            </div>
        </div>
    );
};

export default CartValue;
