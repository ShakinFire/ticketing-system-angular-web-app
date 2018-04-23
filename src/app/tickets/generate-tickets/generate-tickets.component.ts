import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-generate-tickets',
  templateUrl: './generate-tickets.component.html',
  styleUrls: ['./generate-tickets.component.css']
})
export class GenerateTicketsComponent implements OnInit {

  user = {
    name: 'user 1',
    teamsUser:['team 1', 'team 2', 'team 3', 'team 4',]
  };
  teams = this.user.teamsUser;
  teamss= '';

  teamsis = {
    'team 1':['user 1', 'user 2', 'user 3'],
    'team 2':['user 1', 'user 3', 'user 4'],
    'team 3':['user 1', 'user 5', 'user 6'],
    'team 4':['user 1', 'user 6', 'user 2'],
  }
  userss=[];
fun(){
  this.userss=this.teamsis[this.teamss];
  return this.userss;
}

 
  isOpen='open';
  

  ticket = new Ticket();

  submited = false;

  onSubmit(){
    this.submited=true;
  }

  ticketData: Object;
  errorMessage: string;

  constructor() { }

  ngOnInit() {
  }

  ticketFormsData(ticketForm:any) {
    console.log(ticketForm.value);
    ticketForm.resetForm();
    
  }

}
