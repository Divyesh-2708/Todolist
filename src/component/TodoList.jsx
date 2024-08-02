/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import style from "../css/TodoList.module.css";
export default function TodoList({ todos, setTodos, TodoId, setTodoId }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={style.list}>
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.task}
          item={item}
          TodoId={TodoId}
          setTodoId={setTodoId}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
