import Button from '@restart/ui/esm/Button'
import React, {useState} from 'react'
import { useDispatch} from 'react-redux';
import { add } from '../../store/actions/actions';
import { Card, Form } from 'react-bootstrap'


export default function RecordInput() {
  const [diaryEntry, setDiaryEntry] = useState('');
  const dispatch = useDispatch();

  const options = { hour: 'numeric', minute: 'numeric', year: 'numeric', month: 'long', day: 'numeric', };
  const today  = new Date();

  const labelOnChange = (e) => {
    setDiaryEntry(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(add({entry:diaryEntry, date: today.toLocaleDateString("ru-RU", options)}))
    setDiaryEntry('');
  }

  return (
    <Card>
      <Form
        className="form-group"
        onSubmit={onSubmit}>
        <label htmlFor="newRecord" className="form-label m-3"> Новая Запись...</label>
        <div className="m-3">
          <textarea className="form-control" id="newRecord" rows="3"
            placeholder="Дорогой дневник..."
            onChange={labelOnChange}
            value={diaryEntry}>
          </textarea>
        </div>
        <div className="d-flex justify-content-between">
          <Button type="submit" className="btn btn-info rounded m-3">💾</Button>
          <div className="m-3 mt-3">{ today.toLocaleDateString("ru-RU", options)}</div>
         </div>
      </Form>
    </Card>
  )
}
