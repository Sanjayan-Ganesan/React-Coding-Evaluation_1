import React from "react";
import styles from "./task.module.css";
import AddTask from "../AddTask/AddTask";
const Task = () => {
  //const[count,setCount]=React.useState(1)

  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" id={styles.check_1} data-cy="task-checkbox" />
      
      <div data-cy="task-text">
      <AddTask />

      </div>
      <button data-cy="task-remove-button"></button>
    </li>
  );
};

export default Task;
