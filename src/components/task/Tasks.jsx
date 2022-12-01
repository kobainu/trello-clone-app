import React from "react";
import Task from "./Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

// タスクを並び替える関数
const reorder = (taskList, startIndex, endIndex) => {
  const remove = taskList.splice(startIndex, 1); // ドラッグしたタスクを削除してremoveに配列として格納
  taskList.splice(endIndex, 0, remove[0]); // タスクリストのドロップした位置に削除したタスクを追加
};

const Tasks = ({ taskList, setTaskList }) => {
  const handleDragEnd = (result) => {
    reorder(taskList, result.source.index, result.destination.index);
    setTaskList(taskList);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    task={task}
                    index={index}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks;
