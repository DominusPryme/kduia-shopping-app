import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
    const { Location, dispatch } = useContext(AppContext);

    const changeLocation = (e) => {
        dispatch({
            type: 'CHG_LOCATION',
            payload: e.target.value,
        });
    };

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect03">Currency</label>
            </div>
            <select className="custom-select" id="inputGroupSelect03" value={Location} onChange={changeLocation}>
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};

export default Location;
