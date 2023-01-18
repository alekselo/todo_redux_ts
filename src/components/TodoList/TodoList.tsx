import { useSelector } from 'react-redux'
import { StateType } from '../../store/todo/TodoReducer'
import { InputTask } from '../InputTask/InputTask'
import styles from './TodoList.module.scss'
import { store } from '../../store/todo/store'

export const TodoList = () => {

  const tasks = useSelector((state: Array<StateType>) => state)
  console.log(store.getState())

  return (
    <section className={styles.articleSection}>
      {!tasks.length && (
        <p className={styles.articleText}>There is no one task.</p>
      )}
      {tasks.map((task) => (
        <InputTask id={task.id} key={task.id} text={task.text} completed={task.completed} />
      ))}
    </section>
  )
}