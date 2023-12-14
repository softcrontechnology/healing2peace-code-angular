import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RwGroupsComponent } from './rw-groups.component';

describe('RwGroupsComponent', () => {
  let component: RwGroupsComponent;
  let fixture: ComponentFixture<RwGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RwGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RwGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
