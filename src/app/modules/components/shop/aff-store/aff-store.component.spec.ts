import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffStoreComponent } from './aff-store.component';

describe('AffStoreComponent', () => {
  let component: AffStoreComponent;
  let fixture: ComponentFixture<AffStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
