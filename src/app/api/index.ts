import { AxiosCoreApi } from './axiosCore';
import { TaskListModule } from './modules';

export class Api {
  private readonly request: AxiosCoreApi;

  public readonly taskList: TaskListModule;

  constructor() {
    this.request = new AxiosCoreApi;
    
    this.taskList = new TaskListModule(this.request);
  }

  clearTokens(): void {
  }
}

export const api = new Api();