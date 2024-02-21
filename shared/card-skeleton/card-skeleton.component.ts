import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {SquareAnimateTopComponent} from "../square-animate-top/square-animate-top.component";
import {TuiLoaderModule} from "@taiga-ui/core";
import {Range} from "../../utils/range";

@Component({
  selector: 'app-card-skeleton',
  standalone: true,
  imports: [
    NgForOf,
    SquareAnimateTopComponent,
    TuiLoaderModule
  ],
  templateUrl: './card-skeleton.component.html',
  styleUrl: './card-skeleton.component.css'
})
export class CardSkeletonComponent {
  protected readonly Range = Range.range;
}
