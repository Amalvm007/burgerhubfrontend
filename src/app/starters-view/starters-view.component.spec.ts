import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartersViewComponent } from './starters-view.component';

describe('StartersViewComponent', () => {
  let component: StartersViewComponent;
  let fixture: ComponentFixture<StartersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartersViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
