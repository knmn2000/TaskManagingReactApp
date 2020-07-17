import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { connect } from "react-redux";
import { sortTasks } from "../actions/sort";
import PropTypes from "prop-types";
const Sidebar = ({ sort, sortTasks }) => {
  console.log(sort);
  const set_sort = (parameter) => {
    sortTasks({ parameter });
  };
  return (
    <>
      <div className="sidebar">
        <dropdown>
          <input type="checkbox" id="toggle" />
          <label htmlFor="toggle" className="animate">
            Sort
          </label>
          <ul className="animate">
            <li
              // className={sort === "status" ? "animate date" : "animate"}
              // onClick={() => sortTask("status")}
              className={sort === "status" ? "animate date" : "animate"}
              onClick={() => set_sort("status")}
            >
              By Status
            </li>
            {/* <li className={"animate " + sort} onClick={() => sortTask("date")}> */}
            <li className={"animate " + sort} onClick={() => set_sort("date")}>
              By Date
            </li>
          </ul>
        </dropdown>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  sortTasks: PropTypes.func.isRequired,
  sort: PropTypes.string,
};
const mapStateToProps = (state) => {
  return {
    sort: state.sort,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     sortTask: (parameter) => {
//       dispatch({ type: "SORT_TASK", payload: parameter });
//     },
//   };
// };
export default connect(mapStateToProps, { sortTasks })(Sidebar);
