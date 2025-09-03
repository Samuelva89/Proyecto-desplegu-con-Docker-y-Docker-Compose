import axios from 'axios';
import type { Task, TaskStatus } from '../Task';

const API_BASE_URL = 'http://localhost:3001/api';

export const getTasks = async (): Promise<Task[]> => {
  const response = await axios.get(`${API_BASE_URL}/tasks`);
  return response.data;
};

export const createTask = async (task: { title: string; description: string }): Promise<Task> => {
  const response = await axios.post(`${API_BASE_URL}/tasks`, task);
  return response.data;
};

export const updateTaskStatus = async (id: string, status: TaskStatus): Promise<Task> => {
  const response = await axios.patch(`${API_BASE_URL}/tasks/${id}`, { status });
  return response.data;
};

export const deleteTask = async (id: string): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/tasks/${id}`);
};
