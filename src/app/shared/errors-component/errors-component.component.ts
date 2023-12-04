import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-errors-component',
  templateUrl: './errors-component.component.html',
  styleUrls: ['./errors-component.component.css']
})
export class ErrorsComponentComponent {
  @Input() errorMsgString: string = '';
  @Input() errorMsgNumber: string = '';
  @Input() errorMsgNull: string='';
}
