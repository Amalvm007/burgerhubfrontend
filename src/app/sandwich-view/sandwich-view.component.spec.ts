import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandwichViewComponent } from './sandwich-view.component';

describe('SandwichViewComponent', () => {
  let component: SandwichViewComponent;
  let fixture: ComponentFixture<SandwichViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandwichViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SandwichViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
