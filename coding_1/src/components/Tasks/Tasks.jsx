import React from "react";
import styles from "./tasks.module.css";
import data from "./tasks.json";

const Tasks = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
       {data.map((e)=>{
         return(
           <div>
             <h4>{e.text}</h4>
           </div>
         )

        })}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
