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
      {TaskCardsList.map((TaskCardList) => (
        <TaskCard key={TaskCardList.id} />
      ))}
      <AddTaskCardButton
        TaskCardsList={TaskCardsList}
        setTaskCardsList={setTaskCardsList}
      />
    </div>
  );
};

export default TaskCards;
