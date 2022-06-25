import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAnimalsComponent } from './app-animals.component';

describe('AppAnimalsComponent', () => {
  let component: AppAnimalsComponent;
  let fixture: ComponentFixture<AppAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAnimalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
