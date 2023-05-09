import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDynamicOrderComponent } from './ngx-dynamic-order.component';

describe('NgxDynamicOrderComponent', () => {
  let component: NgxDynamicOrderComponent;
  let fixture: ComponentFixture<NgxDynamicOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDynamicOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxDynamicOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
