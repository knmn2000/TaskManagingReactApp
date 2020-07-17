import { combineReducers } from "redux";
import task from "./task";
export default combineReducers({
  task,
});
// import { SORT_TASK, ADD_TASK, GET_TASKS } from "../actions/types";
// const initState = {
//   tasks: [],
//   loading: true,
//   error: null,
//   sort: "date",
// };
// const rootReducer = (state = initState, action) => {
//   switch (action.type) {
//     case SORT_TASK:
//       return {
//         ...state,
//         loading: false,
//         sort: action.payload,
//       };
//     case ADD_TASK:
//       return {
//         ...state,
//         loading: false,
//         tasks: [...state.tasks, action.payload],
//       };
//     case GET_TASKS:
//       return {
//         ...state,
//         loading: false,
//         tasks: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default rootReducer;
