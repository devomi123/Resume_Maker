import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UeserNetworkComponent } from './ueser-network.component';

describe('UeserNetworkComponent', () => {
  let component: UeserNetworkComponent;
  let fixture: ComponentFixture<UeserNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UeserNetworkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UeserNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
