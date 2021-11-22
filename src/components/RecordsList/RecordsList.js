import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch} from 'react-redux';
import { select,remove } from '../../store/actions/actions';

import './RecordsList.css';

export default function RecordsList() {
  const records = useSelector((store) => store.records);
  const dispatch = useDispatch();

  const onSelect = (e)=> {
    const {id} = e.target.dataset;
    dispatch(select(id))
  }

  const onRemove = (e)=> {
    e.stopPropagation();
    const {id} = e.target.dataset;
    dispatch(remove(id))
  }
  return (
    <Card>
        <ul className="list-group">
      {records
      .sort((a,b)=> 
       a.date - b.date
      ).map((item)=> {
        const {date,id} = item;
        return(
          <li 
            key={id}
            data-id={id} 
            onClick={onSelect}
            className="list-group-item d-flex justify-content-between align-items-center">
            {date}
          <button 
            data-id={id} 
            onClick={onRemove}
            className="btn btn-info rounded " >
            ❌
          </button>
        </li>
        )
          }
        )
      }
    </ul>
    </Card>
  )
}
