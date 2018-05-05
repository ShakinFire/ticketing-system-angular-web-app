import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
  providers: [ NgbTypeaheadConfig ],
})
export class OptionsComponent implements OnInit {
  newTeamName: string;
  newTeamDescription: string;
  newTeamLead: { id: number, name: string };
  test: { id: number, name: string}[];
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.test = [
      { id: 1, name: 'Gosho Enev' },
      { id: 2, name: 'Toshko Toshef' },
      { id: 3, name: 'Marq Mariikova' },
      { id: 4, name: 'Penka Peneva' },
    ];
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.test.filter(member => member.name.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10));
  
  formatter = (x: {name: string}) => x.name;

  changeTeamName() {
    console.log(this.newTeamName);
    this.newTeamName = '';

    // *TODO: change team name
  }

  changeTeamDescription() {
    console.log(this.newTeamDescription);
    this.newTeamDescription = '';

    // *TODO: change team description
  }

  changeTeamLead() {
    console.log(this.newTeamLead);
  }

  leaveTeamModal(content) {
    this.modalService.open(content);
  }

  leaveTeam() {
    // *TODO: check if user password is correnct if it is, remove him from the team
  }

}
