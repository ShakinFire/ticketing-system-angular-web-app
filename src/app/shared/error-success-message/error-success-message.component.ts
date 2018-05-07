import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-success-message',
  templateUrl: './error-success-message.component.html',
  styleUrls: ['./error-success-message.component.css']
})
export class ErrorSuccessMessageComponent implements OnInit {
  @Input() message: string;
  @Input() isError: boolean;
  constructor() { }

  ngOnInit() {
  }

}
