import React from 'react'
import { Card } from 'react-bootstrap';
import { useSelector} from 'react-redux';

export default function Record() {
  const selected = useSelector((store) => store.selectedRecord);
  return (
    <Card>
      <div className="m-4 text-center" >
      {selected.map((item)=>(
        <div
          key={item.id}
          id={item.id}>
          {item.text}
          <br/>
          <b>{item.autor}</b>
        </div>))}
      </div>
    </Card>
  )
}

