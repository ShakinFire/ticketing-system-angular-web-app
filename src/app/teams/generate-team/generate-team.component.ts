import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-generate-team',
  templateUrl: './generate-team.component.html',
  styleUrls: ['./generate-team.component.css']
})
export class GenerateTeamComponent implements OnInit {

  errorMessage: string;
  isError: boolean;
  userId = 1;

  constructor() { }

  ngOnInit() {
  }

  validate(data): string {
    if (data.title.length < 4) {
      return 'Error: Title should be at least 4 characters'
    }
  }

  teamsFormsData(teamsForm: NgForm) {
    this.errorMessage = this.validate(teamsForm.value);
    if (this.errorMessage) {
      this.isError = true;
    } else {
      // ticketForm.value.status = 'open';
      teamsForm.value.userId = this.userId;
      console.log(teamsForm.value);
      // this.teamsForm.addTicket(teamsForm.value);
      teamsForm.resetForm();
    }
  }

}


