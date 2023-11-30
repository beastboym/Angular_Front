import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { TicketService } from "../../../services/ticket/ticket.service";
import { Ticket } from "../../../models/ticket";
import { Student } from "src/models/student";
import { STUDENTS_MOCK } from "src/mocks/student.mock";

enum Major {
  Option1 = "Informatique",
  Option2 = "Litterature",
  // Add more options as needed
}
@Component({
  selector: "app-ticket-form",
  templateUrl: "./ticket-form.component.html",
  styleUrls: ["./ticket-form.component.scss"],
})
export class TicketFormComponent implements OnInit {
  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)
  /**
   * TicketForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms
   */

  public ticketForm: FormGroup;
  public majorOptions = Object.values(Major);
  public students: Student[] = STUDENTS_MOCK;
  public selectedStudent: number;
  constructor(
    public formBuilder: FormBuilder,
    public ticketService: TicketService
  ) {
    // Form creation
    this.ticketForm = this.formBuilder.group({
      title: [""],
      description: [""],
      major: [""],
      student: [""],
      isArchived: false,
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit() {}

  addTicket() {
    const data = this.ticketForm.getRawValue();

    // Utilisez selectedStudent au lieu de Number(data.studentId)
    const stdID = this.selectedStudent;

    data.student = STUDENTS_MOCK[stdID];
    console.log(data);
    this.ticketService.addTicket(data);
  }
}
