import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiresponseQuestionComponent } from './multiresponse-question.component';

describe('MultiresponseQuestionComponent', () => {
  let component: MultiresponseQuestionComponent;
  let fixture: ComponentFixture<MultiresponseQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiresponseQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiresponseQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
