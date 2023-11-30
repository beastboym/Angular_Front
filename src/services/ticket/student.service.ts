import { Injectable } from "@angular/core";
import { STUDENTS_MOCK } from "../../mocks/student.mock";
import { BehaviorSubject, Observable } from "rxjs/index";
import { Student } from "src/models/student";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class StudentService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private studentList: Student[] = STUDENTS_MOCK;
  private apiUrl: string = "http://localhost:9428/api/students";

  /**
   * Observable which contains the list of the student.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */

  constructor(private http: HttpClient) {
    this.getStudents().subscribe();
  }
  getStudents(): Observable<Student[]> {
    console.log(this.apiUrl);
    return this.http.get<Student[]>(this.apiUrl);
  }

  public student$: BehaviorSubject<Student[]> = new BehaviorSubject(
    this.studentList
  );
}
