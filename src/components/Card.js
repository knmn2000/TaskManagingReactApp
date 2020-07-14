import React, { useState, useContext, useReducer } from "react";
import { GlobalContext } from "../context/GlobalState";
import AppReducer from "./../context/AppReducer";
//  TODO - CLEAN THIS UP
//         REMOVE REDUNDANT STUFF
export const Card = ({ task }) => {
  const initialState = {
    tasks: [],
    error: null,
    loading: true,
  };
  const taskContext = useContext(GlobalContext);
  const [app_state, dispatch] = useReducer(AppReducer, initialState);
  const [state, setState] = useState({
    title: task["title"],
    description: task["description"],
    status: task["status"],
  });
  var date = new Date();
  date =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  const changeValue = () => {
    var editedTask = {
      id: task["id"],
      title: state.title,
      description: state.description,
      status: state.status,
    };
    return taskContext.editTask(editedTask);
  };
  const deleteTask = () => {
    return taskContext.deleteTasks(task);
  };
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-header">
          <span
            className={state.status ? "tag tag-done" : "tag tag-pending"}
            onClick={(e) => {
              return (
                dispatch({
                  type: "EDIT_TASK",
                  payload: {
                    id: task["id"],
                    title: task["title"],
                    description: task["description"],
                    status: !state.status,
                  },
                }),
                setState({
                  status: !state.status,
                  title: state.title,
                  description: state.description,
                })
              );
            }}
          >
            {state.status ? "DONE" : "PENDING"}
          </span>
        </div>
        <span
          className="delete"
          onClick={() => {
            deleteTask();
          }}
        >
          x
        </span>
        <h4>
          <textarea
            className="text-title"
            value={state.title}
            onChange={(e) => {
              return (
                // CLEAN THIS UP
                dispatch({
                  type: "EDIT_TASK",
                  payload: {
                    id: task["id"],
                    title: e.target.value,
                    description: task["description"],
                    status: task["status"],
                  },
                }),
                setState({
                  status: state.status,
                  title: e.target.value,
                  description: state.description,
                })
                // changeValue(e.target.value)
              );
            }}
          ></textarea>
        </h4>
        <p>
          <textarea
            className="text-description"
            value={state.description}
            onChange={(e) => {
              return (
                // CLEAN THIS UP
                dispatch({
                  type: "EDIT_TASK",
                  payload: {
                    id: task["id"],
                    title: task["title"],
                    description: e.target.value,
                    status: task["status"],
                  },
                }),
                setState({
                  status: state.status,
                  title: state.title,
                  description: e.target.value,
                })
                // changeValue(e.target.value)
              );
            }}
          ></textarea>
        </p>
        <div className="card-date">{date}</div>
      </div>
    </div>
  );
};
