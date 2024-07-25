import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoTranscriptComponent } from './auto-transcript.component';

describe('AutoTranscriptComponent', () => {
  let component: AutoTranscriptComponent;
  let fixture: ComponentFixture<AutoTranscriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoTranscriptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoTranscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
