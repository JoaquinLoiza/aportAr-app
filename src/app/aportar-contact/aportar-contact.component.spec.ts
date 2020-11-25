import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AportarContactComponent } from './aportar-contact.component';

describe('AportarContactComponent', () => {
  let component: AportarContactComponent;
  let fixture: ComponentFixture<AportarContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AportarContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AportarContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
