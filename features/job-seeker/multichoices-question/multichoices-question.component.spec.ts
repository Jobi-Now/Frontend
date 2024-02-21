import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultichoicesQuestionComponent } from './multichoices-question.component';

describe('MultichoicesQuestionComponent', () => {
  let component: MultichoicesQuestionComponent;
  let fixture: ComponentFixture<MultichoicesQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultichoicesQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultichoicesQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
