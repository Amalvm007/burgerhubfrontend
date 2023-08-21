import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShawarmaMenuComponent } from './shawarma-menu.component';

describe('ShawarmaMenuComponent', () => {
  let component: ShawarmaMenuComponent;
  let fixture: ComponentFixture<ShawarmaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShawarmaMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShawarmaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
