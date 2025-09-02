import axios from 'axios';
import type { Task, TaskStatus } from '../Task';

const API_URL = 'http://localhost:3000/api';

export const getTasks = async (): Promise<Task[]> => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

export const createTask = async (task: { title: string; description: string }): Promise<Task> => {
  const response = await axios.post(`${API_URL}/tasks`, task);
  return response.data;
};

export const updateTaskStatus = async (id: string, status: TaskStatus): Promise<Task> => {
  const response = await axios.patch(`${API_URL}/tasks/${id}`, { status });
  return response.data;
};

export const deleteTask = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/tasks/${id}`);
};
