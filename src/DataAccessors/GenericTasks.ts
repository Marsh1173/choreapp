import { Task } from "../Model/Task";
import { groups } from "./GenericGroups";

export const tasks: Task[] = [
    { name: "Milestone 4", id: -3, finished: false, time: "Saturday, before midnight", group: undefined },
    { name: "Write talk", id: -4, finished: false, time: "Sunday, before 8:00am", group: undefined },
    { name: "Cleaning Checks", id: -5, finished: false, time: "Thursday, before 7:00pm", group: groups[0] },
    { name: "Second Prototype", id: -6, finished: false, time: "Next Tuesday, before 8:00am", group: undefined },
    { name: "Project 5", id: -7, finished: false, time: "Next Thursday, before midnight", group: groups[1] },
    { name: "October Budget", id: -8, finished: true, time: "Saturday, before 11:00am", group: undefined },
    { name: "Ministering interviews", id: -9, finished: true, time: "Friday, before 10:00pm", group: undefined },
];
