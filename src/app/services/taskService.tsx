import { Task } from "../types/Task";
import { BaseService } from "./baseService";

export default class TaskService extends BaseService {
  //get tasks

  async getTask(): Promise<Task[]> {
    const response = await this.instance.get("tasks/");
    return response.data;
  }

  //create tasks

  async createTask(data: Task) {
    const response = await this.instance.post("tasks/", data);
    return response;
  }

  //delete tasks
}
