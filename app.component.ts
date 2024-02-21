import {NgDompurifySanitizer} from "@tinkoff/ng-dompurify";
import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  TUI_SANITIZER,
  TuiAlertModule,
  TuiButtonModule,
  TuiDataListModule,
  TuiDialogModule,
  TuiModeModule,
  TuiRootModule,
  TuiThemeNightModule
} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiInputModule, TuiSelectModule, TuiToggleModule} from '@taiga-ui/kit';
import {AbstractTuiThemeSwitcher, TuiLetModule} from "@taiga-ui/cdk";
import {initFlowbite} from 'flowbite';
import {HttpClientModule} from "@angular/common/http";
import {NavBarComponent} from "./shared/nav-bar/nav-bar.component";
import {SideBarComponent} from "./shared/side-bar/side-bar.component";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TuiRootModule,
    HttpClientModule,
    TuiThemeNightModule,
    TuiModeModule,
    TuiInputModule,
    FormsModule,
    TuiLetModule,
    TuiButtonModule,
    TuiToggleModule,
    ReactiveFormsModule,
    TuiDialogModule,
    TuiAlertModule,
    FormsModule,
    ReactiveFormsModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    NavBarComponent,
    SideBarComponent,
  ],
  templateUrl: './app.component.html',
  providers: [
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer
    }
  ]
})
export class AppComponent extends AbstractTuiThemeSwitcher implements OnInit {

  title = 'jobinow';

  ngOnInit(): void {
    initFlowbite();
  }

  isNight = false;
  private nightSubject = new BehaviorSubject<boolean>(this.isNight);

  night$: Observable<boolean> = this.nightSubject.asObservable();

  toggleNight() {
    this.isNight = !this.isNight;
    this.nightSubject.next(this.isNight);
  }
}
