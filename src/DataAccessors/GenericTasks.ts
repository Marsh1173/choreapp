import { Task } from "../Model/Task";
import { groups } from "./GenericGroups";

export const tasks: Task[] = [
    { name: "Milestone 444444444444444444444444444444444444444444444444444444", finished: false, time: "Saturday, before midnight", group: undefined },
    { name: "Write talk", finished: false, time: "Sunday, before 8:00am", group: undefined },
    { name: "Cleaning Checks", finished: false, time: "Thursday, before 7:00pm", group: groups[0] },
];
export const finished: Task[] = [
    { name: "October Budget", finished: true, time: "Saturday, before 11:00am", group: undefined },
    { name: "Ministering interviews", finished: true, time: "Friday, before 10:00pm", group: undefined },
];
export const comingup: Task[] = [
    { name: "Second Prototype", finished: false, time: "Next Tuesday, before 8:00am", group: undefined },
    { name: "Project 5", finished: false, time: "Next Thursday, before midnight", group: groups[1] },
    { name: "2nd Midterm", finished: false, time: "Next Friday, before midnight", group: undefined },
];
