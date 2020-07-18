import {
  SORT_TASK,
  ADD_TASK,
  GET_TASKS,
  DELETE_TASK,
  EDIT_TASK,
} from "../actions/types";
const initState = {
  tasks: [],
  loading: true,
  error: null,
  sort: "date",
};
export default function (state = initState, action) {
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
    case GET_TASKS:
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      };
    case DELETE_TASK:
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      };
    case EDIT_TASK:
      return {
        ...state,
        loading: false,
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
}
