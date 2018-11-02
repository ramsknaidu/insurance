import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAdvisorComponent } from './show-advisor.component';

describe('ShowAdvisorComponent', () => {
  let component: ShowAdvisorComponent;
  let fixture: ComponentFixture<ShowAdvisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAdvisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
