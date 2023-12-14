import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiSessionComponent } from './indi-session.component';

describe('IndiSessionComponent', () => {
  let component: IndiSessionComponent;
  let fixture: ComponentFixture<IndiSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
