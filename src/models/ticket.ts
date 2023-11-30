import { Student } from "./student";
export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: Student;
  major?: string;
  isArchived: boolean;
}
