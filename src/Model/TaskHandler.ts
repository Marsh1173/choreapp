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
        let curDate: Date = new Date();
        let filtered: Task[] = this.taskList.filter((task) => task.finished == false && (!task.time || isSameDayOrEarlier(curDate, task.time)));
        return filtered.sort(sortPrioritizeUnset);
    }

    public static getComingUpTasks(): Task[] {
        let curDate: Date = new Date();
        let filtered: Task[] = this.taskList.filter((task) => task.finished == false && task.time && !isSameDayOrEarlier(curDate, task.time));
        return filtered.sort(sortPrioritizeUnset);
    }

    public static getFinishedTasks(): Task[] {
        let filtered: Task[] = this.taskList.filter((task) => task.finished == true);
        return filtered.sort(sortPrioritizeUnset);
    }
}

export interface TaskListObserver {
    onTaskListChange: () => void;
}

function isSameDayOrEarlier(curDate: Date, oldDate: Date): boolean {
    return curDate.getDate() >= oldDate.getDate() && curDate.getFullYear() >= oldDate.getFullYear() && curDate.getMonth() >= oldDate.getMonth();
}

function sortPrioritizeUnset(a: Task, b: Task): number {
    let aTime: number = a.time ? a.time.getTime() : 0;
    let bTime: number = b.time ? b.time.getTime() : 0;
    return aTime - bTime;
}
