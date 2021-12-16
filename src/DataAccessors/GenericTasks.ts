import { Task } from "../Model/Task";
import { groups } from "./GenericGroups";

export const tasks: Task[] = [
    {
        name: "Milestone 4",
        id: -3,
        finished: false,
        time: new Date("Thu Dec 16 2021 23:59:00"),
        group: undefined,
        growInAnimation: false,
        ifRotates: false,
        repeatIndex: 0,
    },
    {
        name: "Write talk",
        id: -4,
        finished: false,
        time: new Date("Thu Dec 16 2021 23:58:00"),
        group: undefined,
        growInAnimation: false,
        ifRotates: false,
        repeatIndex: 0,
    },
    { name: "Cleaning Checks", id: -5, finished: false, time: undefined, group: groups[0], growInAnimation: false, ifRotates: false, repeatIndex: 0 },
    {
        name: "Second Prototype",
        id: -6,
        finished: false,
        time: new Date("Wed Dec 14 2021 13:00:00"),
        group: undefined,
        growInAnimation: false,
        ifRotates: false,
        repeatIndex: 0,
    },
    {
        name: "Project 5",
        id: -7,
        finished: false,
        time: new Date("Wed Dec 15 2021 23:58:00"),
        group: groups[1],
        growInAnimation: false,
        ifRotates: false,
        repeatIndex: 0,
    },
    { name: "October Budget", id: -8, finished: true, time: undefined, group: undefined, growInAnimation: false, ifRotates: false, repeatIndex: 0 },
    { name: "Ministering interviews", id: -9, finished: true, time: undefined, group: undefined, growInAnimation: false, ifRotates: false, repeatIndex: 0 },
];
