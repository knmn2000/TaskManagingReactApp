import { SORT_TASK } from "./types";

export const sortTasks = ({ parameter }) => (dispatch) => {
  dispatch({
    type: SORT_TASK,
    payload: parameter,
  });
};
