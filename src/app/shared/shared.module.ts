import { Autosize } from 'ng-autosize';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordBreakPipe } from './word-break/word-break.pipe';
import { LabelStatusColorDirective } from './label-status-color/label-status-color.directive';
import { SetAttributeDirective } from './set-attribute/set-attribute.directive';
import { NothingHereComponent } from './nothing-here/nothing-here.component';


@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [
    WordBreakPipe,
    LabelStatusColorDirective,
    SetAttributeDirective,
    NothingHereComponent,
    Autosize,

  ],
  exports: [
    WordBreakPipe,
    LabelStatusColorDirective,
    SetAttributeDirective,
    NothingHereComponent,
    Autosize,
  ]
})
export class SharedModule { }
