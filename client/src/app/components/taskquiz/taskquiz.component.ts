import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-taskquiz',
  templateUrl: './taskquiz.component.html',
  styleUrls: ['./taskquiz.component.scss']
})
export class TaskquizComponent {
 @Input() taskquiz: any;
 
}
