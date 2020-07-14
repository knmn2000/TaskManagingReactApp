import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Card } from "./Card";
import { connect } from "react-redux";

const Tasks = (props) => {
  const { tasks, getTasks, sort } = useContext(GlobalContext);
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div className="tasks">
      {tasks.map((task) => {
        if (props.sort === "status" && tasks.length > 1) {
          if (task.status === false) {
            return <Card task={task} key={task["id"]} />;
          }
        } else {
          return <Card task={task} key={task["id"]} />;
        }
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    sort: state.sort,
  };
};
export default connect(mapStateToProps)(Tasks);
