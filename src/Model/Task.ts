import { Group } from "./Group";

export interface Task {
    name: string;
    finished: boolean;
    group: Group | undefined;
    time: string;
}
