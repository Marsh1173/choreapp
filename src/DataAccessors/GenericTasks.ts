import { Task } from "../Model/Task";

export const tasks: Task[] = [
    { name: "Milestone 4", finished: false, time: "Saturday, before midnight", group: undefined },
    { name: "Write talk", finished: false, time: "Sunday, before 8:00am", group: undefined },
];
export const finished: Task[] = [
    { name: "October Budget", finished: true, time: "Saturday, before 11:00am", group: undefined },
    { name: "Ministering interviews", finished: true, time: "Friday, before 10:00pm", group: undefined },
];
export const comingup: Task[] = [
    { name: "Second Prototype", finished: false, time: "Next Tuesday, before 8:00am", group: undefined },
    { name: "Project 5 Experience", finished: false, time: "Next Thursday, before midnight", group: undefined },
    { name: "2nd Midterm", finished: false, time: "Next Friday, before midnight", group: undefined },
];
