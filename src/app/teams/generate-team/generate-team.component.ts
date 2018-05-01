import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { TeamsService } from './teams.service';
import { k } from '@angular/core/src/render3';
import { NotificationService } from '../../notification/notification.service';


@Component({
  selector: 'app-generate-team',
  templateUrl: './generate-team.component.html',
  styleUrls: ['./generate-team.component.css'],
  providers: [NgbTypeaheadConfig]
})
export class GenerateTeamComponent implements OnInit {

  errorMessage: string;
  isError: boolean;
  userId = 1;
  userName = 'desi karova';
  users: any[];
  usr = [];
  user: any;
  userss: any;
  // k: any;
  constructor(private readonly service: TeamsService, config: NgbTypeaheadConfig,
    private readonly nService: NotificationService) {
    config.showHint = true;
  }

  ngOnInit() {
    this.service.getAllUsers().subscribe(data => {
      this.userss = data.users;
      // console.log(data.users);
      this.users = this.userss.map(x => x.name);
    })

    // this.users = this.user.map(x => x.name);

  }

  validate(data): string {
    if (data.name.length < 4) {
      return 'Error: Title should be at least 4 characters'
    }
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.users.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10));

  addUser() {
    if (this.usr.find(x => x === this.user)) {
      this.user = '';
      return console.error('this is user exist');
    } else {
      this.usr.push(this.user);
      this.user = '';
    }
  }
  delUser(uss: HTMLElement) {
    const el = uss.textContent;
    this.usr.splice(this.usr.indexOf(el), 1);
  }


  teamsFormsData(teamsForm: NgForm) {
    this.errorMessage = this.validate(teamsForm.value);
    if (this.errorMessage) {
      this.isError = true;
    } else {


      teamsForm.value.userId = this.userId;
      this.service.postNewTeam(teamsForm.value).subscribe(data => {
        console.log(data);
      });

      while (this.usr.length) {
        let item = this.usr.pop();

        const obj = {
          content: `${this.userName.trim()} invited you to join a team ${teamsForm.value.name.trim()} `,
          type: 'team',
          nameType: teamsForm.value.name,
          user: item
        };
        this.nService.addNotification(obj).subscribe(data => {
        });
      };
      teamsForm.resetForm();
    }
  }


}


