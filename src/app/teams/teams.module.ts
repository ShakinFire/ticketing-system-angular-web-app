import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateTeamComponent } from './generate-team/generate-team.component';
import { FormsModule } from '@angular/forms';
import { NgbTypeaheadConfig, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TeamsService } from './generate-team/teams.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbTypeaheadModule,
    NgbModule,
    AngularFontAwesomeModule,

  ],
  declarations: [GenerateTeamComponent],
  providers: [TeamsService, NgbTypeaheadConfig, NgbTypeaheadModule],
  exports: [GenerateTeamComponent]
})
export class TeamsModule { }
