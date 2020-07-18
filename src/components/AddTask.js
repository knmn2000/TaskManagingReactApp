import { connect } from "react-redux";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useState } from "react";

import { addTasks } from "../actions/task";

const AddTask = ({ addTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 100000),
      title,
      description,
      status,
    };
    addTasks(newTask);
  };
  return (
    <>
      <h3>Add new task</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Title"
          />
          <label htmlFor="description"></label>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description"
          />
          <label htmlFor="status">
            <button
              type="button"
              className={status ? "btn check" : "btn uncheck"}
              onClick={(e) => setStatus(!status)}
            >
              {status ? "Done" : "Pending"}
              <span>
                {status ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  <FontAwesomeIcon icon={faTimes} />
                )}
              </span>
            </button>
          </label>
        </div>
        <button type="submit" className="btn">
          Add Task
        </button>
      </form>
    </>
  );
};

AddTask.propTypes = {
  addTasks: PropTypes.func.isRequired,
};
export default connect(null, { addTasks })(AddTask);
