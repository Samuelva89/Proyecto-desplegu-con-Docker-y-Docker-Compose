import React from 'react';
import { TaskStatus } from '../Task';
import type { Task } from '../Task';

interface TaskItemProps {
  task: Task;
  onUpdateStatus: (id: string, status: TaskStatus) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onUpdateStatus, onDelete }) => {
  return (
    <div className={`task-item ${task.status.toLowerCase()}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <div>
        {task.status !== TaskStatus.OPEN && (
          <button onClick={() => onUpdateStatus(task.id, TaskStatus.OPEN)}>Open</button>
        )}
        {task.status !== TaskStatus.IN_PROGRESS && (
          <button onClick={() => onUpdateStatus(task.id, TaskStatus.IN_PROGRESS)}>In Progress</button>
        )}
        {task.status !== TaskStatus.DONE && (
          <button onClick={() => onUpdateStatus(task.id, TaskStatus.DONE)}>Done</button>
        )}
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
