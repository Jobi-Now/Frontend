
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule, TuiInputNumberModule, TuiInputPasswordModule, TuiMarkerIconModule, TuiToggleModule} from "@taiga-ui/kit";
import {TuiTableFiltersModule, TuiTableModule} from "@taiga-ui/addon-table";
import {TuiButtonModule, TuiFormatNumberPipeModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {AsyncPipe, NgForOf} from "@angular/common";
import { AuthLayoutComponent } from '../../../layout/auth-layout/auth-layout.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    AuthLayoutComponent,
    TuiInputNumberModule,
    TuiToggleModule,
    FormsModule,
    ReactiveFormsModule,
    TuiTableFiltersModule,
    TuiTableModule,
    TuiMarkerIconModule,
    TuiButtonModule,
    TuiFormatNumberPipeModule,
    TuiTextfieldControllerModule,
    TuiInputPasswordModule,
    TuiInputModule,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor() {}
  
  registerForm: FormGroup = new FormGroup({
    
  })
}

