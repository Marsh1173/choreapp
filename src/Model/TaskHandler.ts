import { Task } from "./Task";
import { tasks } from "../DataAccessors/GenericTasks";

export class TaskHandler {
    public static taskList: Task[] = tasks;
    public static taskListObservers: TaskListObserver[] = [];

    public static taskListChange() {
        this.taskListObservers.forEach((observer) => {
            observer.onTaskListChange();
        });
    }

    public static getToDoTasks(): Task[] {
        return this.taskList.filter((task) => task.finished == false);
    }

    public static getComingUpTasks(): Task[] {
        return this.taskList.filter((task) => false);
    }

    public static getFinishedTasks(): Task[] {
        return this.taskList.filter((task) => task.finished == true);
    }
}

export interface TaskListObserver {
    onTaskListChange: () => void;
}
