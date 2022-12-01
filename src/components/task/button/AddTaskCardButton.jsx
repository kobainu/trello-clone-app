import React from "react";
import { v4 as uuid } from "uuid";

const AddTaskCardButton = ({ TaskCardsList, setTaskCardsList }) => {
  // タスクカードを追加する
  const addTaskCard = () => {
    const taskCardId = uuid();
    setTaskCardsList([
      ...TaskCardsList,
      { id: taskCardId, draggableId: `taskCard-${taskCardId}` },
    ]);
  };

  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};

export default AddTaskCardButton;
