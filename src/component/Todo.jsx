import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Count from "./Count";

export default function Todo() {
  const [TodoId, setTodoId] = useState(1);
  const [todos, setTodos] = useState([]);
  let CompletedTodos = todos.filter((todo)=>(todo.done)).length;
  return (
    <>
      <Form todos={todos} setTodos={setTodos} TodoId={TodoId} setTodoId={setTodoId}/>
      <TodoList todos={todos} setTodos={setTodos} TodoId={TodoId} setTodoId={setTodoId}/>
      <Count count={CompletedTodos}  totalTodo={todos.length} />
    </>
  );
}
