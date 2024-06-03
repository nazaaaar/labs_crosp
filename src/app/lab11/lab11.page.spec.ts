import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lab11Page } from './lab11.page';

describe('Lab11Page', () => {
  let component: Lab11Page;
  let fixture: ComponentFixture<Lab11Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Lab11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
