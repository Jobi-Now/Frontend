import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {FishAnimationComponent} from "../fish-animation/fish-animation.component";

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FishAnimationComponent
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @Input() IsOpen: Boolean = false;
}
