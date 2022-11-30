import React from "react";
import Task from "./Task";

const Tasks = ({ taskList }) => {
  return (
    <div>
      {taskList.map((task, index) => (
        <div key={index}>
          <Task task={task} />
        </div>
      ))}
    </div>
  );
};

export default Tasks;
