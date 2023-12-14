import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCoachComponent } from './group-coach.component';

describe('GroupCoachComponent', () => {
  let component: GroupCoachComponent;
  let fixture: ComponentFixture<GroupCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupCoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
