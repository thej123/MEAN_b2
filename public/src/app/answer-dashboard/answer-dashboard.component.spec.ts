import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerDashboardComponent } from './answer-dashboard.component';

describe('AnswerDashboardComponent', () => {
  let component: AnswerDashboardComponent;
  let fixture: ComponentFixture<AnswerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
