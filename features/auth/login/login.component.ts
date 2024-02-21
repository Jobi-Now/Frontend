import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {TuiAlertService, TuiButtonModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {TUI_PASSWORD_TEXTS, TuiInputModule, TuiInputPasswordModule, TuiMarkerIconModule} from '@taiga-ui/kit';
import {of} from 'rxjs';
import * as events from "events";
import {AuthLayoutComponent} from "../../../layout/auth-layout/auth-layout.component";
import {AuthenticationService} from "../../../core/services/authentication.service";
import {RoutingService} from "../../../core/services/routing.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AuthLayoutComponent,
    FormsModule,
    ReactiveFormsModule,
    TuiMarkerIconModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
    TuiInputPasswordModule,
    TuiInputModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [
    {
      provide: TUI_PASSWORD_TEXTS,
      useValue: of(['']),
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor(
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService,
    private authService: AuthenticationService,
    private router: RoutingService
  ) {
  }

  googleOauthUrl: string | null = null;
  googleOauthUrlNotReady: boolean = true;

  ngOnInit(): void {
    this.authService.getOauthGoogleUrl().subscribe((url: string) => {
      this.googleOauthUrl = url;
    });

    if (this.googleOauthUrl != null || this.googleOauthUrl != "")
      this.googleOauthUrlNotReady = false;
  }

  loginForm: FormGroup<any> = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', Validators.required)
  });

  notReadyToSubmit = false;

  get isButtonDisabled(): boolean {
    return this.notReadyToSubmit || this.loginForm.invalid;
  }

  async login() {
    try {
      if (this.loginForm.invalid) {
        this.alerts.open('', {
          label: 'Please enter all fields',
          status: 'warning',
          autoClose: true,
        }).subscribe();
      } else {
        this.notReadyToSubmit = true;
        const result = await this.authService.authenticate(this.loginForm.value);
        if (result) {
          this.alerts.open('', {
            label: 'Successfully logged in',
            status: 'success',
            autoClose: true,
          }).subscribe();
          window.dispatchEvent(new Event("login"));
          this.router.goToAdmin();
          // if (this.authService.getRoles()?.includes('ROLE_ADMINISTRATOR'))
          //     this.router.goToAdmin();
          // else if (this.authService.getRoles()?.includes('ROLE_RESPONSABLE_RAYON'))
          //     this.router.goToResponsableRayon();
        }
      }
    } catch (error) {
      console.log(error);
      this.alerts.open('', {
        label: 'Invalid credentials',
        status: 'error',
        autoClose: true,
      }).subscribe();
    } finally {
      this.notReadyToSubmit = false;
    }
  }


  protected readonly events = events;

  goToOauthGoogle() {
    if (this.googleOauthUrl != null || this.googleOauthUrl != "")
      location.assign(this.googleOauthUrl as string)
    else
      this.alerts.open('', {
        label: 'Invalid Google auth url',
        status: 'error',
        autoClose: true,
      }).subscribe();
  }
}
