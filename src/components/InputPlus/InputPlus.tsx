
import { useState } from 'react';
import { useDispatch, } from 'react-redux';
import * as actions from '../../store/todo/TodoActionCreator';

import styles from './InputPlus.module.scss';

export const InputPlus = () => {

  const dispatch = useDispatch();


  const [text, setText] = useState('');

  const onClick = () => {
    if (text.trim() !== '') {
      dispatch(actions.addTodo(text.trim()))
    }
    setText('');

  }

  return (<div className={styles.inputPlus}>
    <input
      value={text}
      onChange={(e) => { setText(e.target.value) }}
      type="text"
      className={styles.inputPlusValue}
      placeholder="Type here..."
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onClick();
        }
      }}
    />
    <button
      type='submit'
      aria-label="Add"
      className={styles.inputPlusButton}
      onClick={() => { onClick(); }}
      disabled={!text}
    />
  </div>)

};