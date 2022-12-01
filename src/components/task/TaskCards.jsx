import React, { useState } from "react";
import TaskCard from "./TaskCard";
import AddTaskCardButton from "./button/AddTaskCardButton";

const TaskCards = () => {
  const [TaskCardsList, setTaskCardsList] = useState([
    {
      id: 0,
      draggableId: "taskCard-0",
    },
  ]);

  return (
    <div className="TaskCardsArea">
      {TaskCardsList.map((taskCard) => (
        <TaskCard
          key={taskCard.id}
          TaskCardsList={TaskCardsList}
          setTaskCardsList={setTaskCardsList}
          taskCard={taskCard}
        />
      ))}
      <AddTaskCardButton
        TaskCardsList={TaskCardsList}
        setTaskCardsList={setTaskCardsList}
      />
    </div>
  );
};

export default TaskCards;
