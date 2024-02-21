import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'fish-animation',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './fish-animation.component.html',
  styleUrl: './fish-animation.component.css'
})
export class FishAnimationComponent {
  @Input() IsOpen: Boolean = false;
}
