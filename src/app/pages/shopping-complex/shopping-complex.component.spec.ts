import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingComplexComponent } from './shopping-complex.component';

describe('ShoppingComplexComponent', () => {
  let component: ShoppingComplexComponent;
  let fixture: ComponentFixture<ShoppingComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingComplexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
