
import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <span>{todo.text}</span>
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
