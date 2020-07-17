import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { connect } from "react-redux";
import { getTasks } from "../actions/task";
import PropTypes from "prop-types";

const Description = (props) => {
  const { tasks, getTasks } = useContext(GlobalContext);
  console.log(props);
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
      <span className="done"> {completed_tasks.length} Done</span> -{" "}
      <span className="pending">{pending_tasks.length} Pending</span>
    </div>
  );
};

Description.propTypes = {
  getTasks: PropTypes.func.isRequired,
  tasks: PropTypes.object,
  sort: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => {
  return {
    tasks: state.task.tasks,
    sort: state.task.sort,
  };
};
export default connect(mapStateToProps, { getTasks })(Description);
