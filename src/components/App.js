
//import React from "react";
import React, { useState } from 'react';
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a React App", completed: false },
    { id: 3, text: "Deploy the React App", completed: false },
  ]);
  const handleComplete = (id) => {
    
      const updatedTodos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: true } : todo
      );
      setTodos(updatedTodos);
    
  };

  return (
    <div className="App">
          <h1>Parent Component</h1>
           <h3>Child Component</h3>
           <TodoList todos={todos} handleComplete={handleComplete} />
       
    </div>
  )
}

export default App
