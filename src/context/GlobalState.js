import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  tasks: [],
  error: null,
  loading: true,
  sort: "date",
};
const default_task = {
  id: 0,
  title: "Add Title",
  description: "Add Description",
  status: false,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  function sortTask(parameter) {
    state.sort = parameter;
    localStorage.setItem("sort", JSON.stringify(parameter));
    dispatch({
      type: "SORT_TASK",
      payload: parameter,
    });
  }
  function addTasks(task) {
    try {
      const tasks_array = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks_array.unshift(task);
      localStorage.setItem("tasks", JSON.stringify(tasks_array));
      dispatch({
        type: "ADD_TASK",
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
  }
  function deleteTasks(task) {
    try {
      const tasks_array = JSON.parse(localStorage.getItem("tasks")) || [];
      const updated_array = [];
      for (var i = 0; i < tasks_array.length; i++) {
        if (tasks_array[i].id === task.id) {
          tasks_array.splice(i, 1);
        }
      }
      localStorage.setItem("tasks", JSON.stringify(tasks_array));
      if (tasks_array.length === 0) {
        addTasks(default_task);
      }
      dispatch({
        type: "DELETE_TASK",
        payload: updated_array,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "TASK_ERROR",
        payload: err,
      });
    }
  }
  function getTasks() {
    try {
      const tasks_array = JSON.parse(localStorage.getItem("tasks")) || [];
      dispatch({
        type: "GET_TASKS",
        payload: tasks_array,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "TASK_ERROR",
        payload: err,
      });
    }
  }
  function editTask(task) {
    try {
      // const tasks_array = JSON.parse(localStorage.getItem("tasks")) || [];
      // var index = tasks_array.map((object) => {
      //   if (task["id"] === object["id"]) {
      //     return tasks_array.indexOf(object["id"]);
      //   }
      // });
      // tasks_array[index.indexOf(-1)] = task;
      // localStorage.setItem("tasks", JSON.stringify(tasks_array));
      dispatch({
        type: "EDIT_TASK",
        payload: task,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "TASK_ERROR",
        payload: err,
      });
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        // we can access any of this stuff in the components
        tasks: state.tasks,
        error: state.error,
        loading: state.loading,
        sort: state.sort,
        addTasks,
        deleteTasks,
        getTasks,
        editTask,
        sortTask,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
