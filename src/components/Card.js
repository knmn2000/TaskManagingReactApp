import React from "react";

export const Card = ({ task }) => {
  return (
    <div className="card">
      <div className="card-header"></div>
      <div className="card-body">
        <span className={task["status"] ? "tag tag-done" : "tag tag-pending"}>
          {task["status"] ? "DONE" : "PENDING"}
        </span>
        <h4>
          <textarea className="text-title" value={task["title"]}></textarea>
        </h4>
        <p>
          <textarea
            className="text-description"
            contentEditable="true"
            value={task["description"]}
          ></textarea>
        </p>
      </div>
    </div>
  );
};
