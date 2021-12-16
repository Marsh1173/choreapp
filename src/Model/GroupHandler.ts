import { groups } from "../DataAccessors/GenericGroups";
import { Group } from "./Group";
import { TaskHandler } from "./TaskHandler";

export class GroupHandler {
    public static groupList: Group[] = groups;
    public static groupListObservers: GroupListObserver[] = [];

    public static groupListChange() {
        this.groupListObservers.forEach((observer) => {
            observer.onGroupListChange();
        });
    }

    public static getGroups(): Group[] {
        return this.groupList;
    }

    public static deleteGroup(id: number) {
        this.groupList = this.groupList.filter((group) => group.id != id);

        TaskHandler.taskList.forEach((task) => {
            if (task.group && task.group.id == id) {
                task.group = undefined;
            }
        });
    }

    public static getGroupByName(name: string): Group | undefined {
        for (let i: number = 0; i < this.groupList.length; i++) {
            if (this.groupList[i].name == name) {
                return this.groupList[i];
            }
        }
        return undefined;
    }
}

export interface GroupListObserver {
    onGroupListChange: () => void;
}
