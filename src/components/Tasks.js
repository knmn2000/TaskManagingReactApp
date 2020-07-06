import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Card } from "./Card";

export const Tasks = () => {
  const { tasks, getTasks } = useContext(GlobalContext);
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div className="tasks">
      {tasks.map((task) => {
        return <Card task={task} />;
      })}
      {/* <Card text="aefeafae" />
      <Card text="aefeafae" /> */}
    </div>
  );
};
