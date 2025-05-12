import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCurrentResumeComponent } from './upload-current-resume.component';

describe('UploadCurrentResumeComponent', () => {
  let component: UploadCurrentResumeComponent;
  let fixture: ComponentFixture<UploadCurrentResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadCurrentResumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadCurrentResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
