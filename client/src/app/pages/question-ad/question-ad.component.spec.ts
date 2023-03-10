import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAdComponent } from './question-ad.component';

describe('QuestionAdComponent', () => {
  let component: QuestionAdComponent;
  let fixture: ComponentFixture<QuestionAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
