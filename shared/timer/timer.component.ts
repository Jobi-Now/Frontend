import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  @Input() formattedTime = "00:30";
  @Input() dasharray = '283';
  @Input() remainingPathColor = 'base-timer__path-remaining green';
}
