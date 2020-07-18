import { connect } from "react-redux";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { deleteTasks, editTask } from "../actions/task";

const Card = ({ task, deleteTasks, editTask }) => {
  const [state, setState] = useState({
    title: task["title"],
    description: task["description"],
    status: task["status"],
  });
  var date = new Date();
  date =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  const deleteTask = () => {
    return deleteTasks(task);
  };
  const modifyTask = (task) => {
    return editTask(task);
  };
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-header">
          <span
            className={state.status ? "tag tag-done" : "tag tag-pending"}
            onClick={(e) => {
              return (
                modifyTask({
                  id: task["id"],
                  title: task["title"],
                  description: task["description"],
                  status: !state.status,
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
                modifyTask({
                  id: task["id"],
                  title: e.target.value,
                  description: task["description"],
                  status: task["status"],
                }),
                setState({
                  status: state.status,
                  title: e.target.value,
                  description: state.description,
                })
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
                modifyTask({
                  id: task["id"],
                  title: task["title"],
                  description: e.target.value,
                  status: task["status"],
                }),
                setState({
                  status: state.status,
                  title: state.title,
                  description: e.target.value,
                })
              );
            }}
          ></textarea>
        </p>
        <div className="card-date">{date}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  deleteTasks: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};
export default connect(null, { deleteTasks, editTask })(Card);
