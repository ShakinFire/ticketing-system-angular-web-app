import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordBreakPipe } from './word-break/word-break.pipe';
import { LabelStatusColorDirective } from './label-status-color/label-status-color.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    WordBreakPipe,
    LabelStatusColorDirective,
    ],
  exports: [
    WordBreakPipe,
    LabelStatusColorDirective,
  ]
})
export class SharedModule { }
