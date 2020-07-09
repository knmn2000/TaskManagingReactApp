export default (state, action) => {
  switch (action.type) {
    case "GET_TASKS":
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      };
    case "ADD_TASK":
      return {
        ...state,
        loading: false,
        tasks: [...state.tasks, action.payload],
      };
    case "EDIT_TASK":
      const task = action.payload;
      const tasks_array = JSON.parse(localStorage.getItem("tasks")) || [];
      var index = tasks_array.map((object) => {
        if (task["id"] === object["id"]) {
          return tasks_array.indexOf(object["id"]);
        }
      });
      tasks_array[index.indexOf(-1)] = task;
      localStorage.setItem("tasks", JSON.stringify(tasks_array));
    // return {
    //   ...state,
    //   loading: false,
    //   // tasks: action.payload,
    //   tasks: action.payload,
    // };
    case "TASK_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
