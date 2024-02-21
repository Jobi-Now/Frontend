import {Routes} from '@angular/router';
import {LoginComponent} from "./features/auth/login/login.component";
import {RegisterComponent} from "./features/auth/register/register.component";
import {ForgotPasswordComponent} from "./features/auth/forgot-password/forgot-password.component";
import {ProfileComponent} from './features/job-seeker/profile/profile.component';
import {CallbackComponent} from "./features/auth/Oauth/callback/callback.component";
import { QuizComponent } from './features/job-seeker/quiz/quiz.component';
import { QuizQuestionCardComponent } from './features/job-seeker/quiz-question-card/quiz-question-card.component';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      {path: '', component: LoginComponent},
      {path: 'login', component: LoginComponent},
      {path: 'Oauth/callback', component: CallbackComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent}
    ]
  },
  {path: '', component: LoginComponent},
  {path: 'user/profile', component: ProfileComponent},
  { path: 'user/quiz/:name', component: QuizComponent },
  { path: 'user/quiz/:name/questions', component: QuizQuestionCardComponent }
];
