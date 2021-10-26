import { CreateTaskListDTO, EditTaskListDTO, TaskListDTO } from "../../../../types/serverInterface/taskList/taskListDTO";
import { AbstractApiModule } from "../../abstactApiModule";

export class TaskListModule extends AbstractApiModule {
  fetchListOfTaskList(): Promise<TaskListDTO[]> {
    return this.request.get<unknown, TaskListDTO[]>(`/taskList`);
  }

  create(data: CreateTaskListDTO): Promise<TaskListDTO> {
    return this.request.post<CreateTaskListDTO, TaskListDTO>(`/taskList`, data);
  }

  edit(data: EditTaskListDTO, taskListId: number): Promise<TaskListDTO> {
    return this.request.put<EditTaskListDTO, TaskListDTO>(`/taskList/${taskListId}`, data);
  }

  remove(taskListId: number): Promise<void> {
    return this.request.delete(`/taskList/${taskListId}`);
  }
}