import { Group } from "./Group";

export interface Task {
    name: string;
    id: number;
    finished: boolean;
    group: Group | undefined;
    time: Date | undefined;
    growInAnimation: boolean;
    repeatIndex: number;
    ifRotates: boolean;
}
