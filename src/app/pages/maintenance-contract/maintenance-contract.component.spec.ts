import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceContractComponent } from './maintenance-contract.component';

describe('MaintenanceContractComponent', () => {
  let component: MaintenanceContractComponent;
  let fixture: ComponentFixture<MaintenanceContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintenanceContractComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaintenanceContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
