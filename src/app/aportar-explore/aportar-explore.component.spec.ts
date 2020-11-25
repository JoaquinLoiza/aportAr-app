import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AportarExploreComponent } from './aportar-explore.component';

describe('AportarExploreComponent', () => {
  let component: AportarExploreComponent;
  let fixture: ComponentFixture<AportarExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AportarExploreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AportarExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
