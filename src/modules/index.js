import { createStore } from "redux";

export const ADD = "todos/ADD";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          todo: action.payload,
        },
      ];
    default:
      return state;
  }
};

const store = createStore(todoReducer);

export default store;
