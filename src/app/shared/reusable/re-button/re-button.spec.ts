import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReButton } from './re-button';

describe('ReButton', () => {
  let component: ReButton;
  let fixture: ComponentFixture<ReButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
