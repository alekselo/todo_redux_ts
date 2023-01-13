import React from 'react';
import styles from './App.module.scss'
import { InputPlus } from './components/InputPlus/InputPlus';



function App() {





  return (
    <div className="App">
      <article className={styles.article}>
        <h1 className={styles.articleTitle}>ToDo App</h1>
        <section className={styles.articleSection}>
          <InputPlus />
        </section>
        <section className={styles.articleSection}></section>
      </article>
    </div >
  );
}

export default App;
