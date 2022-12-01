import React, { useState } from "react";
import TaskCardTitle from "./TaskCardTitle";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskAddInput from "./input/TaskAddInput";
import Tasks from "./Tasks";

const TaskCard = ({ TaskCardsList, setTaskCardsList, taskCard }) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="taskCard">
      <div className="taskCardTitleAndTaskCardDeleteButtonArea">
        <TaskCardTitle />
        <TaskCardDeleteButton
          TaskCardsList={TaskCardsList}
          setTaskCardsList={setTaskCardsList}
          taskCard={taskCard}
        />
      </div>
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Tasks
        inputText={inputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
};

export default TaskCard;
