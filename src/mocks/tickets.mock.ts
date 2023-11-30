import { Ticket } from "../models/ticket";
import { STUDENTS_MOCK } from "../mocks/student.mock";
const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: "Madrid",
    description: "",
    date: dateToday,
    student: STUDENTS_MOCK[2],
    major: "Informatique",
    isArchived: false,
  },
  {
    title: "Paris",
    description: "Description du voyage",
    date: dateToday,
    student: STUDENTS_MOCK[1],
    major: "Litterature",
    isArchived: false,
  },
];
