import { SORT_TASK } from "./types";

export const sortTasks = ({ parameter }) => (dispatch) => {
  console.log(parameter);
  dispatch({
    type: SORT_TASK,
    payload: parameter,
  });
};
