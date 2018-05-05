import { Component, OnInit } from '@angular/core';
import { myTeamsDash } from '../../../models/teams/my-teams';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css']
})
export class RemoveUserComponent implements OnInit {
  removedUser: myTeamsDash;
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

  removeMember() {
    console.log(this.removedUser);
  }
}
