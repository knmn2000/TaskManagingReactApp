import { ADD_TASK } from "./types";
export const addTasks = ({ task }) => (dispatch) => {
  try {
    const tasks_array = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks_array.unshift(task);
    localStorage.setItem("tasks", JSON.stringify(tasks_array));
    dispatch({
      type: ADD_TASK,
      // payload: task,
      payload: task,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: "TASK_ERROR",
      payload: err,
    });
  }
};
