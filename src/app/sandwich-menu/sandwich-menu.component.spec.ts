import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandwichMenuComponent } from './sandwich-menu.component';

describe('SandwichMenuComponent', () => {
  let component: SandwichMenuComponent;
  let fixture: ComponentFixture<SandwichMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandwichMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SandwichMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
