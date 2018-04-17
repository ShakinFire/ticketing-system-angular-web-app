import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
  ],
  declarations: [
    NavComponent,
    FooterComponent,
  ],
  exports: [
    NavComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
