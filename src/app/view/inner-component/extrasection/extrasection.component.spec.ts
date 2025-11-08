import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrasectionComponent } from './extrasection.component';

describe('ExtrasectionComponent', () => {
  let component: ExtrasectionComponent;
  let fixture: ComponentFixture<ExtrasectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtrasectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtrasectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
