import {Component, EventEmitter, Output} from '@angular/core';
import {RoutingService} from "../../core/services/routing.service";
import {AuthenticationService} from "../../core/services/authentication.service";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FishAnimationComponent} from "../fish-animation/fish-animation.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'side-bar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, FishAnimationComponent, RouterLink],
  providers: [HttpClientModule],
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent {

  constructor(private router: RoutingService, private authService: AuthenticationService) {
  }

  IsOpen = false;
  @Output() IsOpenChange = new EventEmitter<boolean>();

  navigateTo(s: string) {
    this.router.navigateTo(s);
  }

  toggle() {
    this.IsOpen = !this.IsOpen;
    this.IsOpenChange.emit(this.IsOpen);
  }

  logout() {
    this.authService.logout();
  }
}
