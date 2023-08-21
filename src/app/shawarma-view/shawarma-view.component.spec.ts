import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShawarmaViewComponent } from './shawarma-view.component';

describe('ShawarmaViewComponent', () => {
  let component: ShawarmaViewComponent;
  let fixture: ComponentFixture<ShawarmaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShawarmaViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShawarmaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
