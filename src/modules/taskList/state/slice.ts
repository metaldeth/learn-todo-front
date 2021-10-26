import { createSlice } from "@reduxjs/toolkit";
import { TaskListDTO } from "../../../types/serverInterface/taskList/taskListDTO";
import { createTaskList, editTaskList, fetchTaskList, removeTaskList } from "./thunk";

export interface TaskListState {
  map: Record<number, TaskListDTO>;
  list: Array<number>;
}

const initialState: TaskListState = {
  map: {},
  list: []
}

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTaskList.fulfilled, (state, action) => {
      const listOfTaskList = action.payload;
      const map: Record<number, TaskListDTO> = {};
      const list: Array<number> = [];

      listOfTaskList.forEach(item => {
        map[item.id] = item;
        list.push(item.id);
      })

      state.map = map;
      state.list = list;
    })

    builder.addCase(createTaskList.fulfilled, (state, action) => {
      const taskList = action.payload;

      state.map[taskList.id] = taskList;
      state.list.push(taskList.id);
    })

    builder.addCase(editTaskList.fulfilled, (state, action) => {
      const updatedTaskList = action.payload;

      state.map[updatedTaskList.id] = updatedTaskList;
    })

    builder.addCase(removeTaskList.fulfilled, (state, action) => {
      const taskListId = action.payload;

      delete state.map[taskListId];

      const indexOfDelete = state.list.findIndex(id => id === taskListId);
      state.list.splice(indexOfDelete, 1);
    })
  }
})

export const taskListReducer = taskListSlice.reducer;