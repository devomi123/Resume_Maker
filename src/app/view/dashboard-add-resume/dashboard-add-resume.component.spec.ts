import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddResumeComponent } from './dashboard-add-resume.component';

describe('DashboardAddResumeComponent', () => {
  let component: DashboardAddResumeComponent;
  let fixture: ComponentFixture<DashboardAddResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardAddResumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAddResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
