const initialState = {
  status: "DEFAULT"
};

export default function (state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case "TODOS_PENDING":
      return {
        status: "PENDING"
      };
    case "TODOS_FULFILLED": {
      return {
        status: "FULFILLED"
      };
    }
    case "TODOS_REJECTED": {
      return {
        status: "REJECTED"
      };
    }
    default:
      return state;
  }
}
