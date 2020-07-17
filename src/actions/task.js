import { ADD_TASK, GET_TASKS } from "./types";
export const addTasks = (task) => (dispatch) => {
  try {
    const tasks_array = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks_array.unshift(task);
    console.log(task);
    localStorage.setItem("tasks", JSON.stringify(tasks_array));
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  } catch (err) {
    dispatch({
      type: "TASK_ERROR",
      payload: err,
    });
  }
};

export const getTasks = () => (dispatch) => {
  try {
    const tasks_array = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log("paefaepfhaefn");
    dispatch({
      type: GET_TASKS,
      payload: tasks_array,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: "TASK_ERROR",
      payload: err,
    });
  }
};
