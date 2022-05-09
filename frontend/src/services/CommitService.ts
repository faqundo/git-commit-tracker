import { Task } from "@/interfaces/Task";
import { AxiosResponse } from "axios";
import axios from "./axios";

export const getCommits = async (): Promise<AxiosResponse< any[]>> =>
  await axios.get("/commits");


export const getTask = async (id: string): Promise<AxiosResponse<Task>> =>
  await axios.get(`/tasks/${id}`);

export const createTask = async (task: Task): Promise<AxiosResponse> =>
  await axios.post("/tasks", task);

export const updateTask = async (
  id: string,
  newTask: Task
): Promise<AxiosResponse<Task>> => await axios.put(`/tasks/${id}`, newTask);

export const deleteTask = async (id: string): Promise<AxiosResponse> =>
  await axios.delete(`/tasks/${id}`);
