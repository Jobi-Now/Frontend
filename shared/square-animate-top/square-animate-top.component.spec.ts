import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareAnimateTopComponent } from './square-animate-top.component';

describe('SquareAnimateTopComponent', () => {
  let component: SquareAnimateTopComponent;
  let fixture: ComponentFixture<SquareAnimateTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquareAnimateTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SquareAnimateTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
