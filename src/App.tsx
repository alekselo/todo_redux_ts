import React from 'react';
import styles from './App.module.scss'
import { InputPlus } from './components/InputPlus/InputPlus';
import { TodoList } from './components/TodoList/TodoList';



function App() {





  return (
    <div className="App">
      <article className={styles.article}>
        <h1 className={styles.articleTitle}>ToDo App</h1>
        <section className={styles.articleSection}>
          <InputPlus />
        </section>
        <section className={styles.articleSection}>
          <TodoList />
        </section>
      </article>
    </div >
  );
}

export default App;
