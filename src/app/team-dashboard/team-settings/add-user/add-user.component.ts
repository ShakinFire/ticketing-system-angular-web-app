import { myTeamsDash } from './../../../models/teams/my-teams';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  newUser: myTeamsDash;
  test: myTeamsDash[];
  constructor() { }

  ngOnInit() {
    this.test = [
      { id: 1, name: 'Gosho Enev' },
      { id: 2, name: 'Toshko Toshef' },
      { id: 3, name: 'Marq Mariikova' },
      { id: 4, name: 'Penka Peneva' },
    ]
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.test.filter(member => member.name.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10));
  
  formatter = (x: {name: string}) => x.name;

  addMember() {
    console.log(this.newUser);
  }
}
