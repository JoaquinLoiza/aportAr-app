import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AportarHomeComponent } from './aportar-home.component';

describe('AportarHomeComponent', () => {
  let component: AportarHomeComponent;
  let fixture: ComponentFixture<AportarHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AportarHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AportarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
