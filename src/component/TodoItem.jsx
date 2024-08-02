/* eslint-disable react/prop-types */
import style from "../css/TodoItem.module.css";
export default function TodoItem({ item, todos, setTodos, TodoID, setTodoId }) {
  function handleClick(task) {
    // e.preventDefault();
    let newTodos = todos.map((todo) =>
      todo.id === task ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  }

  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
    setTodoId(TodoID - 1);
  }

  const todoDone = item.done == true ? style.completed : "";
  return (
    <div className={style.itemContainer}>
      <h2 className={style.itemName}>
        <span onClick={() => handleClick(item.id)} className={todoDone}>
          {item.task}
        </span>
        <span>
          <button
            className={style.itemRemove}
            onClick={() => handleDelete(item)}
          >
            X
          </button>
        </span>
      </h2>
      <hr className={style.line}></hr>
    </div>
  );
}
