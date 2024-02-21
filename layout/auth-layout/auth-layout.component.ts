import { Component } from '@angular/core';
import {AuthBackgroundComponent} from "../../shared/auth-background/auth-background.component";

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [
    AuthBackgroundComponent
  ],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
