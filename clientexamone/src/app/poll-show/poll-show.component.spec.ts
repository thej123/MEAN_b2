import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollShowComponent } from './poll-show.component';

describe('PollShowComponent', () => {
  let component: PollShowComponent;
  let fixture: ComponentFixture<PollShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
