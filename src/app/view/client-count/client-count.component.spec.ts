import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCountComponent } from './client-count.component';

describe('ClientCountComponent', () => {
  let component: ClientCountComponent;
  let fixture: ComponentFixture<ClientCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
