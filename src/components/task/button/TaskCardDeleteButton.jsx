import React from "react";

const TaskCardDeleteButton = ({
  TaskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const taskCardDeleteButton = (id) => {
    // タスクカードを削除する
    setTaskCardsList(TaskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        <i className="bi bi-file-earmark-x-fill"></i>
      </button>
    </div>
  );
};

export default TaskCardDeleteButton;
