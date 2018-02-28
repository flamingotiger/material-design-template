import React from 'react'
import './TodoList.css';

const TodoList = ({form, children}) => {
  return (
    <main className="todo-list-template">
      <div className='title'>
      오늘 할 일
      </div>
      <section className="form-wrapper">
        { form }
      </section>
      <section className="totos-wrapper">
        { children }
      </section>
    </main>
  )
}

export default TodoList;
