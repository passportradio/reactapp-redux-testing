import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { addTodo } from "./redux/actions";
import "./styles.css";

function TodoApp({ fetchTodos, status }) {
  useEffect(() => {
    fetchTodos();
  }, []);

  if (status === "PENDING") {
    return <div>loading...</div>;
  }

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div data-testid="status">{status}</div>
    </div>
  );
}

const mapDispatch = (dispatch) => ({
  fetchTodos: () => dispatch(addTodo())
});

export default connect(
  (store) => ({
    status: store.todos.status
  }),
  mapDispatch
)(TodoApp);
