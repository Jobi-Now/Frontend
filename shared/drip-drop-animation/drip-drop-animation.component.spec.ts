import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DripDropAnimationComponent } from './drip-drop-animation.component';

describe('DripDropAnimationComponent', () => {
  let component: DripDropAnimationComponent;
  let fixture: ComponentFixture<DripDropAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DripDropAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DripDropAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
