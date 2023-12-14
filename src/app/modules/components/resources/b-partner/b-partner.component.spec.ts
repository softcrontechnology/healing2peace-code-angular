import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BPartnerComponent } from './b-partner.component';

describe('BPartnerComponent', () => {
  let component: BPartnerComponent;
  let fixture: ComponentFixture<BPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
