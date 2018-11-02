import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHealthPolicyComponent } from './show-health-policy.component';

describe('ShowHealthPolicyComponent', () => {
  let component: ShowHealthPolicyComponent;
  let fixture: ComponentFixture<ShowHealthPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHealthPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHealthPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
