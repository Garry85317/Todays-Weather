import React from 'react'
import moment from 'moment/moment';

import { AiOutlineSearch } from 'react-icons/Ai';
import { BsFillTrashFill } from 'react-icons/Bs'

export default function History({ history, setHistory, setSearch }) {
  const handleSearch = (country, city) => {
    const time = moment().format('LTS');
    setSearch({ country, city, time })
  }
  const handleClear = (item) => {
    setHistory(history.filter((res) => res !== item));
  }
  return (
    <div className='history'>
      <div className='title'><h2>Search History</h2></div>
      <div className='table'>
        <ul>
          {history.length ?
            history.map((item, i) => (
              <li key={i}>
                <div className='left'>{i + 1}. {item.country},{item.city}</div>
                <div className='right'>
                  <p>{item.time.toString()}</p>
                  <AiOutlineSearch onClick={() => handleSearch(item.country, item.city)} />
                  <BsFillTrashFill onClick={() => handleClear(item)} />
                </div>
              </li>
            ))
            :
            "No Record"
          }
        </ul>
      </div>
    </div>
  )
}
