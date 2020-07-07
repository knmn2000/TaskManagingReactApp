import React, { useState, useContext } from "react";
import Editable from "./Editable";
import { GlobalContext } from "../context/GlobalState";
export const Card = ({ task }) => {
  const taskContext = useContext(GlobalContext);
  const [taskTitle, setTaskTitle] = useState(task["title"]);
  const [taskDescription, setTaskDescription] = useState(task["description"]);
  const [taskStatus, setTaskStatus] = useState(task["status"]);
  const changeValue = () => {
    var editedTask = {
      id: task["id"],
      title: taskTitle,
      description: taskDescription,
      status: taskStatus,
    };
    return taskContext.editTask(editedTask);
  };
  return (
    <div className="card">
      <div className="card-header"></div>
      <div className="card-body">
        <span
          className={taskStatus ? "tag tag-done" : "tag tag-pending"}
          onClick={(e) => setTaskStatus(!taskStatus)}
        >
          {taskStatus ? "DONE" : "PENDING"}
        </span>
        <h4>
          {/* <Editable text={task["title"]} type="textarea"> */}
          <textarea
            className="text-title"
            value={taskTitle}
            onChange={(e) => {
              return setTaskTitle(e.target.value), changeValue(e.target.value);
            }}
            // contentEditable="true"
          ></textarea>
          {/* </Editable> */}
        </h4>
        <p>
          <textarea
            className="text-description"
            // contentEditable="true"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          ></textarea>
        </p>
      </div>
    </div>
  );
};
