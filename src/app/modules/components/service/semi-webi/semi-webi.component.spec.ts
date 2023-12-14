import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiWebiComponent } from './semi-webi.component';

describe('SemiWebiComponent', () => {
  let component: SemiWebiComponent;
  let fixture: ComponentFixture<SemiWebiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemiWebiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiWebiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
