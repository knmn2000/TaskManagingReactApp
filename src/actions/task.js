import { ADD_TASK, EDIT_TASK, GET_TASKS, DELETE_TASK } from "./types";

const default_task = {
  id: 0,
  title: "Add Title",
  description: "Add Description",
  status: false,
};
const tasks_stored = JSON.parse(localStorage.getItem("tasks")) || [];
if (tasks_stored.length === 0) {
  tasks_stored.unshift(default_task);
  localStorage.setItem("tasks", JSON.stringify(tasks_stored));
}

export const addTasks = (task) => (dispatch) => {
  try {
    console.log("called");
    const tasks_array = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks_array.unshift(task);
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
export const deleteTasks = (task) => (dispatch) => {
  try {
    const tasks_array = JSON.parse(localStorage.getItem("tasks")) || [];
    const updated_array = [];
    for (var i = 0; i < tasks_array.length; i++) {
      if (tasks_array[i].id === task.id) {
        tasks_array.splice(i, 1);
      }
    }
    if (tasks_array.length === 0) {
      tasks_array.unshift(default_task);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks_array));
    if (tasks_array.length === 0) {
      addTasks(default_task);
    }
    dispatch({
      type: DELETE_TASK,
      payload: updated_array,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: "TASK_ERROR",
      payload: err,
    });
  }
};

export const editTask = (task) => (dispatch) => {
  try {
    console.log("aefe");
    const tasks_array = JSON.parse(localStorage.getItem("tasks")) || [];
    var index = tasks_array.map((object) => {
      if (task["id"] === object["id"]) {
        return tasks_array.indexOf(object["id"]);
      }
    });
    tasks_array[index.indexOf(-1)] = task;
    localStorage.setItem("tasks", JSON.stringify(tasks_array));
    dispatch({
      type: EDIT_TASK,
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
