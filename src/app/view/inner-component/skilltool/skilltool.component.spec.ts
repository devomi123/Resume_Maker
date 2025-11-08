import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilltoolComponent } from './skilltool.component';

describe('SkilltoolComponent', () => {
  let component: SkilltoolComponent;
  let fixture: ComponentFixture<SkilltoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkilltoolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkilltoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
