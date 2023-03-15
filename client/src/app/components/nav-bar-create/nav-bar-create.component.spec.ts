import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarCreateComponent } from './nav-bar-create.component';

describe('NavBarCreateComponent', () => {
  let component: NavBarCreateComponent;
  let fixture: ComponentFixture<NavBarCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
