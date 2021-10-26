import { RootState } from "../../../app/store";

export const selectListOfTaskList = (state: RootState) => {
  const list = state.taskList.list;
  const map = state.taskList.map;
  return list.map(id => map[id]);
}