import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { restore,trashSelect } from '../../store/actions/actions';
import Empty from '../Empty/Empty';


export default function Trash() {
  const trash = useSelector((store) => store.trash);
  const dispatch = useDispatch();

  const onSelect = (e)=> {
    const {id} = e.target.dataset;
    dispatch(trashSelect(id))
  }

  const onRestore = (e)=> {
    e.stopPropagation();
    const {id} = e.target.dataset;
    dispatch(restore(id))
  }
  return (
    <div>
      {trash.length === 0
      ?
        <Empty/>
      :
      trash
      .map((item)=>{
        const {date,id} = item;
        return(
          <li
            key={id}
            data-id={id}
            className="list-group-item d-flex justify-content-between align-items-center"
            onClick={onSelect}>
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
