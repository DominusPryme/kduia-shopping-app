import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const BudgetAllocation = () => {
    const { CartValue, remaining, dispatch } = useContext(AppContext);
    const [allocation, setAllocation] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value)) {
            setAllocation(value);
            setError('');
        } else {
            setError('Please enter a valid number');
        }
    };

    const handleSubmit = () => {
        const allocationValue = parseInt(allocation);
        if (allocationValue > remaining) {
            setError('Allocation exceeds remaining budget');
        } else {
            dispatch({ type: 'ADD_ALLOCATION', payload: allocationValue });
            setAllocation('');
        }
    };

    return (
        <div>
            <input
                type="number"
                value={allocation}
                onChange={handleChange}
                min="0"
                max={remaining}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={handleSubmit}>Allocate Budget</button>
        </div>
    );
};

export default BudgetAllocation;
