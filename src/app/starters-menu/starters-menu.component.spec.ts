import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartersMenuComponent } from './starters-menu.component';

describe('StartersMenuComponent', () => {
  let component: StartersMenuComponent;
  let fixture: ComponentFixture<StartersMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartersMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartersMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
