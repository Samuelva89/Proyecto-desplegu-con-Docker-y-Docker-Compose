import React, { useState, useEffect } from "react";
import { TaskStatus } from "./Task";
import type { Task } from "./Task";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import {
  getTasks,
  createTask,
  updateTaskStatus,
  deleteTask,
} from "./services/api";
import "./App.css";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };
    fetchTasks();
  }, []);

  const handleAddTask = async (title: string, description: string) => {
    const newTask = await createTask({ title, description });
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTaskStatus = async (id: string, status: TaskStatus) => {
    const updatedTask = await updateTaskStatus(id, status);
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onUpdateStatus={handleUpdateTaskStatus}
        onDelete={handleDeleteTask}
      />
    </div>
  );
};

export default App;
