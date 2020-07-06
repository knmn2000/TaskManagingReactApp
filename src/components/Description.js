import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Description = () => {
  const { tasks, getTasks } = useContext(GlobalContext);
  let completed_tasks = [];
  let pending_tasks = [];
  useEffect(() => {
    getTasks();
    if (tasks.length === 0) {
      completed_tasks = pending_tasks = [];
    }
  }, [tasks.length]);
  tasks.map((task) => {
    if (task.status) {
      completed_tasks.push(task);
    } else {
      pending_tasks.push(task);
    }
  });
  return (
    <div className="description">
      <span className="done"> {completed_tasks.length} Done</span>,{" "}
      <span className="pending">{pending_tasks.length} Pending</span>
    </div>
  );
};
