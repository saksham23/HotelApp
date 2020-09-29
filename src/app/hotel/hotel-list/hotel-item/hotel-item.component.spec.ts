/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HotelItemComponent } from './hotel-item.component';

describe('HotelItemComponent', () => {
  let component: HotelItemComponent;
  let fixture: ComponentFixture<HotelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
