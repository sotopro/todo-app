import React from "react";
import "./Todos.css";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <div className="row valign-wrapper">
            <div className="col s8">
              <span className="todo-item">{todo.content}</span>
            </div>
            <div className="col s4">
              <button class="secondary-content waves-effect waves-light btn-small" onClick={() => { deleteTodo(todo.id)}}>
                <i class="material-icons left">delete</i>
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <p className="center">You no have no todo's left, yay!</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
