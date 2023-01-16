import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../store/todo/TodoReducer';
import * as actions from '../../store/todo/TodoActionCreator';

import styles from './InputTask.module.scss';

type InputTaskProps = {
  id: string,
  text: string,
  completed: boolean;
}

export const InputTask: React.FC<InputTaskProps> = ({ id, text, completed }) => {
  useSelector((state: Array<StateType>) => state);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(completed);
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState(text);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    changeCompletedFlag();
  };

  const deleteTask = () => {
    dispatch(actions.deleteTodo(id));
  };

  const changeCompletedFlag = () => {
    dispatch(actions.completeTodo(id));
  }

  const editTodo = () => {
    dispatch(actions.editTodo(id, text));
  }

  return (
    <div className={styles.inputTask}>
      <label className={styles.inputTaskLabel}>
        <input type="checkbox" className={styles.inputTaskCheckbox} checked={isChecked} onChange={handleOnChange} disabled={isEditMode} />
        {isEditMode ?
          <input
            value={value}
            onChange={(e) => { setValue(e.target.value) }}
            className={styles.inputTaskTitleEdit}
          />
          :
          <h3 className={styles.inputTaskTitle}>{value}</h3>}

      </label>
      {isEditMode ? (
        <button
          aria-label='Save'
          className={styles.inputTaskBtnSave}
          onClick={() => {
            editTodo();
            setIsEditMode(false);
          }}
        />
      ) : (<button
        aria-label='Edit'
        className={styles.inputTaskBtnEdit}
        onClick={() => setIsEditMode(true)}
      />)}


      <button
        aria-label='Remove'
        className={styles.inputTaskBtnRemove}
        onClick={deleteTask}
      />
    </div>
  );
} 