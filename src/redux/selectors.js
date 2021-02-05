import { VISIBILITY_FILTERS } from "../constants";

export const getTodosState = storeState => storeState.todos;

export const getTodoList = storeState =>
  getTodosState(storeState) ? getTodosState(storeState).allIds : [];

export const getTodoById = (storeState, id) =>
  getTodosState(storeState)
    ? { ...getTodosState(storeState).byIds[id], id }
    : {};

/**
 * example of a slightly more complex selector
 * select from storeState combining information from multiple reducers
 */
export const getTodos = storeState =>
  getTodoList(storeState).map(id => getTodoById(storeState, id));

export const getTodosByVisibilityFilter = (storeState, visibilityFilter) => {
  const allTodos = getTodos(storeState);
  // console.log(allTodos);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      console.log("here");
      return allTodos.filter(todo => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};
