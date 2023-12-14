import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReVampedStoreComponent } from './re-vamped-store.component';

describe('ReVampedStoreComponent', () => {
  let component: ReVampedStoreComponent;
  let fixture: ComponentFixture<ReVampedStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReVampedStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReVampedStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
