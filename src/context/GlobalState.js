import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  tasks: [],
  error: null,
  loading: true,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addTasks(task) {
    try {
      const tasks_array = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks_array.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks_array));
      dispatch({
        type: "ADD_TASK",
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
      const tasks_array = JSON.parse(localStorage.getItem("tasks")) || [];
      var index = tasks_array.map((object) => {
        if (task["id"] == object["id"]) {
          return tasks_array.indexOf(object);
        }
      });
      // console.log(tasks_array);
      console.log(index);
      localStorage.setItem("tasks", JSON.stringify(tasks_array));
      dispatch({
        type: "EDIT_TASK",
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
  return (
    <GlobalContext.Provider
      value={{
        // we can access any of this stuff in the components
        tasks: state.tasks,
        error: state.error,
        loading: state.loading,
        addTasks,
        getTasks,
        editTask,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
