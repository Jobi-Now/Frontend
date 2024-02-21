import {Component} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {TuiCheckboxModule} from "@taiga-ui/kit";
import {Range} from "../../utils/range";

@Component({
  selector: 'app-table-skeleton',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    TuiCheckboxModule
  ],
  templateUrl: './table-skeleton.component.html',
  styleUrl: './table-skeleton.component.css'
})
export class TableSkeletonComponent {
  protected readonly Range = Range.range;
}
