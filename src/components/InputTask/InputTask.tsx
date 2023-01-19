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
  const [isRemoveMode, setIsRemoveMode] = useState(false);
  console.log(isRemoveMode)
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

  const editTask = () => {
    dispatch(actions.editTodo(id, value));
  }

  return (
    <div className={styles.inputTask}>
      <label className={styles.inputTaskLabel}>
        <input
          type="checkbox"
          className={styles.inputTaskCheckbox}
          checked={isChecked}
          onChange={handleOnChange}
          disabled={isEditMode} />
        {isEditMode ?
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }
            }
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setIsEditMode(false);
                editTask();
              }
            }}
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
            setIsEditMode(false);
            editTask();
          }}
        />
      ) : (<button
        aria-label='Edit'
        className={styles.inputTaskBtnEdit}
        onClick={() => setIsEditMode(true)}
      />)}

      {isRemoveMode === true &&
        <div className={styles.inputTaskRemoveModal}>
          <p className={styles.inputTaskRemoveModalTitle}>Are you sure? </p>
          <div className={styles.inputTaskRemoveModalButton}>
            <button className={styles.inputTaskRemoveModalButtonOk}
              onClick={deleteTask}
            >Delete</button>
            <button className={styles.inputTaskRemoveModalButtonCancel}
              onClick={() => setIsRemoveMode(!isRemoveMode)}
            >Cancel</button>
          </div>
        </div>}
      <button
        aria-label='Remove'
        className={styles.inputTaskBtnRemove}
        onClick={() => {
          setIsRemoveMode(!isRemoveMode);
        }}
      />




    </div>
  );
} 