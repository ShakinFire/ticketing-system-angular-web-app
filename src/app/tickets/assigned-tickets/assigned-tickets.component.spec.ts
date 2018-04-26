import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedTicketsComponent } from './assigned-tickets.component';

describe('AssignedTicketsComponent', () => {
  let component: AssignedTicketsComponent;
  let fixture: ComponentFixture<AssignedTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
