import { SORT_TASK, ADD_TASK } from "../actions/types";
const initState = {
  tasks: [],
  loading: true,
  error: null,
  sort: "date",
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case SORT_TASK:
      return {
        ...state,
        loading: false,
        sort: action.payload,
      };
    case ADD_TASK:
      return {
        ...state,
        loading: false,
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
