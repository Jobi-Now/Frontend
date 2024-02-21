import { Component, OnInit, Signal } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import {TuiBadgedContentModule, TuiIslandModule, TuiMarkerIconModule} from '@taiga-ui/kit';
import { NavBarComponent } from '../../../shared/nav-bar/nav-bar.component';
import { AuthenticationService } from '../../../core/services/authentication.service';
import {Router, RouterModule} from '@angular/router';
import { User } from '../../../core/model/user';
import { Store } from '@ngrx/store';
import {badgePageActions} from "../../../core/store/badge-state/actions/badge-page.actions";
import {selectCollection, selectLoading} from "../../../core/store/badge-state/badge.reducer";
import {Badge} from "../../../core/model/badge";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    TuiButtonModule,
    TuiMarkerIconModule,
    NavBarComponent,
    RouterModule,
    TuiBadgedContentModule,
    TuiIslandModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  isUserNotLoaded: boolean = true;
  user!: User;
  badges = this.store.selectSignal(selectCollection);
  loading = this.store.selectSignal(selectLoading);
  userStatus!: string;

  constructor(private authenticationService: AuthenticationService, private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.getAuthenticatedUser();
    this.store.dispatch(badgePageActions.enter());
  }

  getAuthenticatedUser() {
    this.authenticationService.getCurrentAuthenticatedUser().subscribe(res => {
      this.user = res;
      this.isUserNotLoaded = true;
    })
  }

  selectBadge(badge: Badge) {
    this.store.dispatch(badgePageActions.selectBadge({ badge: badge }));
  }
}
