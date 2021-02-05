function fetchSecretSauce() {
  return fetch("https://cat-fact.herokuapp.com/facts");
}

export const addTodo = () => ({
  type: "TODOS",
  payload: fetchSecretSauce
});
