import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishAnimationComponent } from './fish-animation.component';

describe('LogoComponent', () => {
  let component: FishAnimationComponent;
  let fixture: ComponentFixture<FishAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FishAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
