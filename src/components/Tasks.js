import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Card } from "./Card";
import { connect } from "react-redux";
import { getTasks } from "../actions/task";
import PropTypes from "prop-types";

const Tasks = ({ getTasks, tasks, sort }) => {
  // const { tasks, getTasks, sort } = useContext(GlobalContext);
  useEffect(() => {
    // getTasks();
    getTasks();
  }, []);
  return (
    <div className="tasks">
      {tasks.map((task) => {
        if (sort === "status" && tasks.length > 1) {
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
Tasks.propTypes = {
  getTasks: PropTypes.func.isRequired,
  tasks: PropTypes.object,
  sort: PropTypes.string,
};
const mapStateToProps = (state) => {
  return {
    tasks: state.task.tasks,
    sort: state.task.sort,
    getTasks: state.task.getTasks,
  };
};
export default connect(mapStateToProps, { getTasks })(Tasks);
