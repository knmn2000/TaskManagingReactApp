import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
export const AddTask = () => {
  const { addTasks } = useContext(GlobalContext);
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
              Done{" "}
              <span>
                {status ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  <FontAwesomeIcon icon={faTimes} />
                )}
              </span>
            </button>
            {/* <input
              type="checkbox"
              value={status}
              onChange={(e) => setStatus(!status)}
            /> */}
          </label>
        </div>
        <button type="submit" className="btn">
          Add Task
        </button>
      </form>
    </>
  );
};
