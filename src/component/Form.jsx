/* eslint-disable react/prop-types */
import style from "../css/Todo.module.css";
import { useState } from "react";
// import TodoItem from "./TodoItem";

export default function Form({ todos, setTodos, TodoId, setTodoId }) {
  const [todo, setTodo] = useState({ id: 0, task: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task != "") {
      setTodos([...todos, todo]);
      setTodoId(TodoId + 1);
    } else {
      alert("PLEASE WRITE A TASK");
    }
    setTodo({ id: 0, task: "", done: false });

    console.log(todos);
  }

  return (
    <form className={style.TodoForm} onSubmit={(e) => handleSubmit(e)}>
      <div className={style.TodoContainer}>
        <input
          type="text"
          onChange={(e) =>
            setTodo({ id: TodoId, task: e.target.value, done: false })
          }
          value={todo.task}
          placeholder="ENTER TODO HERE..."
          className={style.TodoInput}
        />
        <button type="submit" className="btn btn-warning">
          ADD
        </button>
      </div>
    </form>
  );
}
