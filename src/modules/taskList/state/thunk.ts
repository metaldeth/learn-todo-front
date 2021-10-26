import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../app/api";
import { CreateTaskListDTO, EditTaskListDTO, TaskListDTO } from "../../../types/serverInterface/taskList/taskListDTO";

export const fetchTaskList = createAsyncThunk<
  TaskListDTO[]
>('taskList/list', async () => {
  return await api.taskList.fetchListOfTaskList();
})

export const createTaskList = createAsyncThunk<
  TaskListDTO,
  CreateTaskListDTO
>('taskList/create', async (data) => {
  return await api.taskList.create(data);
})

export const editTaskList = createAsyncThunk<
  TaskListDTO,
  [EditTaskListDTO, number]
>('taskList/update', async (data) => {
  const [taskListDTO, taskListId] = data;
  return await api.taskList.edit(taskListDTO, taskListId);
})

export const removeTaskList = createAsyncThunk<
  number,
  number
>('taskList/remove', async (taskListId) => {
  await api.taskList.remove(taskListId);
  return taskListId;
})