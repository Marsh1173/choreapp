import { groups } from "../DataAccessors/GenericGroups";
import { Group } from "./Group";

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
}

export interface GroupListObserver {
    onGroupListChange: () => void;
}
