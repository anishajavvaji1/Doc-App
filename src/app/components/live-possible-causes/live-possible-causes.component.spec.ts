import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivePossibleCausesComponent } from './live-possible-causes.component';

describe('LivePossibleCausesComponent', () => {
  let component: LivePossibleCausesComponent;
  let fixture: ComponentFixture<LivePossibleCausesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LivePossibleCausesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivePossibleCausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
