import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoppyComponent } from './loppy.component';

describe('LoppyComponent', () => {
  let component: LoppyComponent;
  let fixture: ComponentFixture<LoppyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoppyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoppyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
