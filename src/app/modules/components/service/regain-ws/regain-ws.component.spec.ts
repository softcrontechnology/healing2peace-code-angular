import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegainWsComponent } from './regain-ws.component';

describe('RegainWsComponent', () => {
  let component: RegainWsComponent;
  let fixture: ComponentFixture<RegainWsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegainWsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegainWsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
