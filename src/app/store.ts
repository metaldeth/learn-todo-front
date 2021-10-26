import {configureStore} from '@reduxjs/toolkit';
import { taskListReducer } from '../modules/taskList/state/slice';

export const store = configureStore({
  devTools: true,

  reducer: {
    taskList: taskListReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
