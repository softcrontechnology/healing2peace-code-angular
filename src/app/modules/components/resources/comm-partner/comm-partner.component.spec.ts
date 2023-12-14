import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommPartnerComponent } from './comm-partner.component';

describe('CommPartnerComponent', () => {
  let component: CommPartnerComponent;
  let fixture: ComponentFixture<CommPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
