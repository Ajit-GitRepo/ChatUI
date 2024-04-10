import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCommonComponentComponent } from './auth-common-component.component';

describe('AuthCommonComponentComponent', () => {
  let component: AuthCommonComponentComponent;
  let fixture: ComponentFixture<AuthCommonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthCommonComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthCommonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
