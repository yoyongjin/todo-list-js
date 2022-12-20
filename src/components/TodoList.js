import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { ADD } from "../modules";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todoInput, setTodoInput] = useState("");

  const dispatch = useDispatch();
  //   useSelector();
  const newTodo = useSelector((state) => state);

  const onAddHandler = (e) => {
    console.log(todoInput);
    dispatch({ type: ADD, payload: todoInput });
  };
  const onChangeHandler = (e) => {
    setTodoInput(e.target.value);
    // console.log(todoInput);
  };

  useSelector((state) => state.todos);
  return (
    <div>
      <div>
        <input
          onChange={onChangeHandler}
          value={todoInput}
        />
        <button onClick={onAddHandler}>add</button>
      </div>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodoList;
