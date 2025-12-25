import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  let [todos, setTodos] = useState([{ task: "Sample text", id: uuidv4(), isDone: false }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTodo = () => {
    setTodos((preTodos) => {
      return [...preTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((deletedTodo) =>
      todos.filter((deletedTodo) => deletedTodo.id != id)
    );
  };

  let uppercaseAll = () => {
    setTodos((preTodo) =>
      preTodo.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let uppercaseOne = (id) => {
    setTodos((preTodo) =>
      preTodo.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };


  let markAsDoneOne = (id) => {
    setTodos((preTodo) =>
      preTodo.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  let markAsDoneAll = () => {
    setTodos((preTodo) =>
      preTodo.map((todo) => {
        return {
          ...todo,
          isDone: true
        };
      })
    );
  };


  return (
    <div>
      <h1>To-Do List</h1>
      <hr />
      <br />
      <br />
      <input
        type="text"
        placeholder="Ender Task : "
        onChange={updateTodoValue}
        value={newTodo}
      />
      <button onClick={addNewTodo}>Add Task</button>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={ todo.isDone ? {textDecoration: "line-through"} : {} }>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>

            <button onClick={() => markAsDoneOne(todo.id)}>Mark As Done one</button>

            <button onClick={() => uppercaseOne(todo.id)}>Uppercase One</button>
          </li>
        ))}
      </ul>

      <hr />

      <button onClick={uppercaseAll}>Uppercase All</button>
      <button onClick={markAsDoneAll}>Mark As Done all</button>
    </div>
  );
}
