import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateTeamComponent } from './generate-team/generate-team.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule

  ],
  declarations: [GenerateTeamComponent],
  exports: [GenerateTeamComponent]
})
export class TeamsModule { }
