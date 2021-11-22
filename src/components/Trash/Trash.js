import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { restore } from '../../store/actions/actions';


export default function Trash() {
  const trash = useSelector((store) => store.trash);
  const dispatch = useDispatch();

  const onRestore = (e)=> {
    const {id} = e.target.dataset;
    dispatch(restore(id))
  }
  return (
    <div>
      {trash
      .map((item)=>{
        const {date,id} = item;
        return(
          <li 
            key={id}
            className="list-group-item d-flex justify-content-between align-items-center">
            {date}
          <button 
            data-id={id} 
            onClick={onRestore}
            className="btn btn-info rounded" >
            🔄
          </button>
        </li>
        )
      })}
    </div>
  )
}
