import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPolicyDetailsComponent } from './show-policy-details.component';

describe('ShowPolicyDetailsComponent', () => {
  let component: ShowPolicyDetailsComponent;
  let fixture: ComponentFixture<ShowPolicyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPolicyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPolicyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
