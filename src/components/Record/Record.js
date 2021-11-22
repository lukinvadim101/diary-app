import React, {useEffect, useState} from 'react'
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch} from 'react-redux';
import './Record.css'

export default function Record() {
  const selected = useSelector((store) => store.selectedRecord);
    
  return (
    <Card>
      <div className="m-4" contentEditable="true" >
        {selected.map((item)=>(<div key={item.id} id={item.id}>{item.text}</div>))}
      </div>
    </Card>
  )
}
