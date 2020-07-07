export default (state, action) => {
  switch (action.type) {
    case "GET_TASKS":
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      };
    case "ADD_TASK":
    case "EDIT_TASK":
      return {
        ...state,
        loading: false,
        tasks: [...state.tasks, action.payload],
      };

    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
