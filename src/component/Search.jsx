import React, { useState } from 'react'
import moment from 'moment';

export default function Search({ setSearch }) {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const handleCity = (e) => {
        setCity(e.target.value)
    }
    const handleCountry = (e) => {
        setCountry(e.target.value)
    }
    const handleClick = (e) => {
        e.preventDefault();
        const time = moment().format('LTS');
        setSearch({ city, country, time })
        setCity('');
        setCountry('');
    }
    const handleClear = (e) => {
        localStorage.removeItem("history");
    }

    return (
        <div className='search'>
            <form>
                <div className='input-group'>
                    <div className='input'>
                        <label>City</label>
                        <input type="text" value={city} onChange={(e) => handleCity(e)}></input>
                    </div>
                    <div className='input'>
                        <label>Country</label>
                        <input type="text" value={country} onChange={(e) => handleCountry(e)}></input>
                    </div>
                </div>
                <div className='button-group'>
                    <button className='button' onClick={handleClick}>Search</button>
                    <button className='button' onClick={handleClear}>Clear</button>
                </div>
            </form>

        </div>
    )
}
