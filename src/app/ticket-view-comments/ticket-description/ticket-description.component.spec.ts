import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDescriptionComponent } from './ticket-description.component';

describe('TicketDescriptionComponent', () => {
  let component: TicketDescriptionComponent;
  let fixture: ComponentFixture<TicketDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
