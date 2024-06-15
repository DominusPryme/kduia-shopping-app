import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, Location, CartValue } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);

    return (
        <div className='alert alert-success'>
            <span>Remaining: {Location}{CartValue - totalExpenses}</span>
        </div>
    );
};

export default Remaining;
