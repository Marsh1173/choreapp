import { Task } from "../Model/Task";
import { groups } from "./GenericGroups";

export const tasks: Task[] = [
    { name: "Milestone 4", finished: false, time: "Saturday, before midnight", group: undefined },
    { name: "Write talk", finished: false, time: "Sunday, before 8:00am", group: undefined },
    { name: "Cleaning Checks", finished: false, time: "Thursday, before 7:00pm", group: groups[0] },
    { name: "Second Prototype", finished: false, time: "Next Tuesday, before 8:00am", group: undefined },
    { name: "Project 5", finished: false, time: "Next Thursday, before midnight", group: groups[1] },
    { name: "October Budget", finished: true, time: "Saturday, before 11:00am", group: undefined },
    { name: "Ministering interviews", finished: true, time: "Friday, before 10:00pm", group: undefined },
];
