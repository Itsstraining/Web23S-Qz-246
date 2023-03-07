import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskquizComponent } from './taskquiz.component';

describe('TaskquizComponent', () => {
  let component: TaskquizComponent;
  let fixture: ComponentFixture<TaskquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskquizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
