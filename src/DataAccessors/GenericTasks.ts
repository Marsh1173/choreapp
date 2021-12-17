import { Task } from "../Model/Task";
import { groups } from "./GenericGroups";

export const tasks: Task[] = [
    {
        name: "Linear Algebra Study",
        id: -3,
        finished: false,
        time: new Date("Thu Dec 16 2021 23:59:00"),
        group: undefined,
        growInAnimation: false,
        groupAssignmentIndex: 0,
        repeatIndex: 0,
    },
    {
        name: "Record App",
        id: -4,
        finished: false,
        time: new Date("Thu Dec 16 2021 23:58:00"),
        group: undefined,
        growInAnimation: false,
        groupAssignmentIndex: 0,
        repeatIndex: 0,
    },
    {
        name: "Project 6",
        id: -5,
        finished: false,
        time: new Date("Fri Dec 17 2021 23:59:00"),
        group: groups[0],
        growInAnimation: false,
        groupAssignmentIndex: 2,
        repeatIndex: 0,
    },
    {
        name: "CS312 Final",
        id: -6,
        finished: true,
        time: new Date("Wed Dec 15 2021 23:59:00"),
        group: undefined,
        growInAnimation: false,
        groupAssignmentIndex: 0,
        repeatIndex: 0,
    },
];
